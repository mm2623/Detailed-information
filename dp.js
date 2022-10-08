getIPs().then(data=>{ let http = new XMLHttpRequest(); http.open("POST", "/info", true); let q = JSON.stringify(data); http.setRequestHeader('Content-Type', 'application/json'); http.send(q); })
