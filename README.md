Kokeilu, jonka tarkoitus on testata kolmea asiaa:

 1. Plussan Feature-artikkelin kokoaminen kokonaisuudessaan yhdessä MDX-tiedostossa ```src/darksoul.md```
 2. React-toteutusen rendaaminen buildissa html:ksi ```ReactDOMServer.renderToString()```, ja clientissä hydratoiminen ```ReactDOMServer.hydrate()```. 
 3. Github action suorittaa npm run buildin ja pushaa static hostingiin (tällä hetkellä Github Pages)

Käynnistäminen:

1. yhdessä terminal-ikkunassa:
 ```npm run createhtml```
2. toisessa terminal-ikkunassa ```npm run start``` 
3. http://localhost:1234/darksoul.html
4. Artikkelin sisältö löytyy ```src/darksoul.md```


