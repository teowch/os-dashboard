.PHONY: frontEnd restAPI
frontEnd:
	cd frontEnd && npm run dev
restAPI:
	cd restAPI && node index.js