# Enka360 resmi web sitesi
Enka360 organizasyonunun resmi web sitesinin kaynak kodudur.

[Site adresi](https://enka360.netlify.app)

## Kullanılan teknolojiler
proje üzerinde geliştirilme yapılması için geliştiricinin aşağıdaki teknolojiler hakkında bilgiye sahip olması gerekir

npm

react.js 

html

javascript

css

## Klasörler 
Bu websitesi create-react-app kullanılarak oluşturulmuştur, dolayısıyla standart create-react-app dizin yapısını kullanmaktadır.

`./src` react-scripts tarafından derlenilen, react.js frameworkü kullanılarak oluşturulmuş dosyalar burada bulunur. aynı zamanda sitenin tüm kodu buradadır.

`./public` üzerinde herhangi bir değişiklik yapılmadan `build` klasörüne iletilen dosyalar burada bulunur.

`./build` react-scripts tarafından derlenilen kaynak kodu ile beraber `public` klasöründen kopyalanan dosyalar bulunur. bu dosyalar bütünü direk tarayıcı üzerinden görüntülenebilen websitesini oluşturur. bu klasör github üzerinde bulundurulmaz ve yerel olarak `npm build` komudu çalıştırılarak elde edilir.

## Derleme aşaması
Sitemiz react.js, jsx gibi teknolojiler kullandığından bu tür dosyalar direkt olarak tarayıcı üzerinde görüntülenemez. Bu yüzden kaynak kodunu tarayıcılar tarafından görüntelenebilecek bir hale çevirmek için `create-react-app` kullanılır.

```bash
$ cd ./enka360    # bu repository'nin bulunduğu klasöre girin

$ npm install     # gerekli dependency'leri indirir

$ npm build       # projeyi derler ve ./build klasörü elde edilir
```

Bu aşamadan sonra `build` klasörü herhangi bir web sunucusu tarafından hostlanabilir ve tarayıcı üzerinden görüntülenebilir.

## Geliştirme
Geliştirme yapılırken tekrar tekrar projeyi derlemek yerine `npm start` komudunu kullanmanız tavsiye edilir. Bu komut kodunuzu otomatik olarak derler ve sitenizi localhost üzerinde hostlar. Komut çalıştırıldıktan sonra otomatik olarak bir web penceresi açılır. siz kod üzerinde değişiklik yaptıkça site yenilenir.

