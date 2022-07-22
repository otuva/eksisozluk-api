# eksisozluk-api

## Resmi olmayan eksisozluk api

Ekşi sözlük için geliştirilmiş node.js tabanlı server API. 
Ekşisözlükten çekilen veriler json formatında kullanıcıya geri döndürülür

Eksisozluge son gelen arayuz guncellemesine gore crawl eder. 

Icinde bir client yoktur. 
Bu apiyi kullanacak daha yazilmamis client icin [tiklayin](https://github.com/otuva/EksiArchive)

### Kurulum 

Terminalde sırasıyla şu komutları çalıştırın:

```bash
git clone https://github.com/otuva/eksisozluk-api
cd eksisozluk-api
npm i
npm run start
```
![image](https://user-images.githubusercontent.com/67955086/180391177-2bb8d374-a745-4b5f-b4c7-b272a8d5f8e7.png)

### Demo

- #### eksisozluk-api: api [documantation](https://otuva-eksiapi.herokuapp.com/doc/)
- #### eksisozluk-api: api [(ssg'nin profili)](https://otuva-eksiapi.herokuapp.com/api/biri/ssg)

### Ozellikler

- Gundem vs. gibi kategorilerdeki ve haber vs. gibi kanallaraki basliklari listeleme
- Tek baslik listeleme
- Cok daha ayrintili return edilen objeler.
- Debe listeleme
- Hatalar, yonlendirmeler vs. ile daha robust bir yapi 
- Eksi sozluk arayuzune birebir uygun endpointler
    - nick, karma, rozetler, son entryleri, pinli entry, profil fotografi linki vs.
- Arama, otomatik tamamlama
- Baslik listeleme ve entryler icin degismeyen format.
- **NOT: Endpoint formatlarinin degistigi durumlar api dokumaninda belirtilmistir. (Tum apide yalnizca 2 durumda degisim oluyor.)**
    - Eger configden kullanici son entryleri getirme ozelligi kapatilirsa kullanici endpointinde lastEntries yer almaz.
    - Eger kullanici entry sayfasi ilk sayfaysa ve pinli entry varsa pinnedEntry adli obje dondurur diger entry sayfalarinda yer almaz.

![image](https://user-images.githubusercontent.com/67955086/180391347-bfe07603-7248-4781-b8fa-daef187eead7.png)

### Endpointler

| method |               endpoint               | örnek url                    | sayfali örnek url                          | açıklama                            |
| ------ | :----------------------------------: | ---------------------------- | ------------------------------------------ | ----------------------------------- |
| get    | `api/basliklar/kanal/:choice/:page?` | `/api/basliklar/kanal/haber` | `/api/basliklar/kanal/müzik/2`             | kanal başlıklarını getirir          |
| get    |    `api/basliklar/:choice/:page?`    | `/api/basliklar/gundem`      | `/api/basliklar/basiboslar/3`              | başlıkları getirir                  |
| get    |      `api/baslik/:slug/:page?`       | `/api/baslik/pena`           | `/api/baslik/gap year/2`                   | bir başlığı getirir                 |
| get    |           `api/entry/:id`            | `/api/entry/1`               | &nbsp;                                     | bir entry'i getirir                 |
| get    |   `api/son-entryleri/:nick/:page?`   | `/api/son-entryleri/ssg`     | `/api/son-entryleri/kumasi-iyi-futbolcu/2` | bir suserin son entrylerini getirir |
| get    |              `api/debe`              | `/api/debe`                  | &nbsp;                                     | debe'yi getirir                     |
| get    |           `api/biri/:nick`           | `/api/biri/ssg`              | &nbsp;                                     | bir suser'ı getirir                 |
| get    |           `api/ara/:query`           | `/api/ara/pena`              | `/api/ara/boston celtics/4`                | arama sonucu                        |
| get    |      `api/autocomplete/:query`       | `/api/autocomplete/pena`     | &nbsp;                                     | otomatik tamamlama                  |
| get    |            `api/kanallar`            | `/api/kanallar`              | &nbsp;                                     | kanal kategorileri                  |

### Dokumantasyon

API'yi çalıştırdıktan sonra `/doc` adresinden API'nin dokümantasyonuna ulaşabilirsiniz.

apidoc-markdown ile olusturulmus markdown dokumantasyona ise [buradan](doc/README.md) ulasabilirsiniz.

![image](https://user-images.githubusercontent.com/67955086/180391758-123141c1-e197-49d3-9130-55499e9710a3.png)

### Ayarlar 

Ayarları `src/config.js` dosyası ile düzenleyebilirsiniz

Api portu, endpointi, apinin davranislarini vs. daha kolay duzenleyebilmek icin kategorilere ayrilmistir.

(Default ayarlar onerilir.)

```js
module.exports = {
  api,
  doc,
  user,
  topic,
  asyncRequestHeaders
};
```
