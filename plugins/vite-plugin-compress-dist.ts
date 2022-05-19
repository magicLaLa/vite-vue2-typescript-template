import type { Plugin, ResolvedConfig } from 'vite';
import { resolve } from 'path';
import fs, { createWriteStream } from 'fs';
import chalk from 'chalk';
import dayjs from 'dayjs';
import * as compressing from 'compressing';

type extType = 'zip' | 'tar' | 'tgz';

interface Options {
	fileName?: string;
	output?: string;
	ext?: extType;
	/** https://dayjs.gitee.io/docs/zh-CN/display/format */
	dayjsFormat?: string;
}

const nowTime = dayjs();

export default function ({
	fileName = 'dist',
	output = 'dist_output',
	ext = 'zip',
	dayjsFormat = 'YYYY_MM_DD_hh_mm_ss'
}: Options): Plugin {
	let viteConfig: ResolvedConfig;
	return {
		name: 'vite:compress-dist',
		apply: 'build',
		enforce: 'post',
		configResolved(ResolvedConfig: ResolvedConfig) {
			viteConfig = ResolvedConfig;
		},
		closeBundle() {
			const distDir = resolve(viteConfig.root, viteConfig.build.outDir);
			const compressName = `${fileName}_${nowTime.format(dayjsFormat)}`;

			const cb = () => {
				setTimeout(() => {
					const destStream = createWriteStream(resolve(viteConfig.root, `${output}/${compressName}.${ext}`));
					const sourceStream = new compressing[ext].Stream();

					destStream.on('finish', () => {
						console.log(chalk.cyan(`compress-dist: ${distDir} compress completed`));
					});

					destStream.on('error', (err) => {
						throw err;
					});

					sourceStream.addEntry(distDir, {
						ignoreBase: true,
					});
					sourceStream.pipe(destStream);
				}, 200);
			};

			const path = resolve(viteConfig.root, `${output}`);
			fs.stat(path, (err, res) => {
				if (err || !res.isDirectory()) {
					fs.mkdir(path, (err) => {
						if (err) {
							console.log(chalk.red(err));
							return;
						}
						cb();
					});
					return;
				}
				cb();
			});
		}
	};
}
