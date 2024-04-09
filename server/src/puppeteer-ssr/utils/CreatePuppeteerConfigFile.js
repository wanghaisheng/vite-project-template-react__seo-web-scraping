/** NOTE: Just call this file in preinstall script hook of package.json */
const fs = require('fs')
const { resolve } = require('path')

const puppeteerConfigPath = resolve(__dirname, '../.puppeteerrc.js')
const targetPath = resolve(__dirname, '../../../../.puppeteerrc.js')

if (!process.env.PUPPETEER_SKIP_DOWNLOAD) {
	// NOTE - Copy .puppeteer.json to root workspace of this project for installing puppeteer
	fs.copyFile(puppeteerConfigPath, targetPath, (err) => {
		if (err) {
			console.error(err)
			throw err
		}

		// console.log(`File ${puppeteerConfigPath} was copied to ${targetPath}`)
	})
}
