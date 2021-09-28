Kokeilu, jonka tarkoitus on testata kolmea asiaa:

 1. Plussan Feature-artikkelin kokoaminen kokonaisuudessaan yhdessä MDX-tiedostossa [src/darksoul.md](src/darksoul.md). Koeta avata tiedosto painamalla pistettä näppäimistöllä.
 2. React-toteutusen rendaaminen buildissa html:ksi ```ReactDOMServer.renderToString()```, ja clientissä hydratoiminen ```ReactDOMServer.hydrate()```. 
 3. Github action suorittaa npm run buildin ja pushaa static hostingiin (tällä hetkellä Github Pages)


Lokaalissa:
1. ```npm install```
2. Kopioi plussan pohjilta .env jossa app_id_prod ja app_key_prod
3. yhdessä terminal-ikkunassa:
 ```npm run createhtml```
4. toisessa terminal-ikkunassa ```npm run start``` 
5. http://localhost:1234/darksoul.html
6. Artikkelin sisältö löytyy ```src/darksoul.md``` ....


