# Enka360 resmi web sitesi
Enka360 organizasyonunun resmi web sitesinin kaynak kodudur.

[Site adresi](https://enka360.netlify.app)

Geliştirme yapmak veya incelemek istiyorsanız lütfen bu dökümanı okuyunuz. 

## Kullanılan teknolojiler
Proje üzerinde geliştirilme yapılması için geliştiricinin aşağıdaki teknolojiler hakkında bilgiye sahip olması gerekir

[NPM](https://www.npmjs.com/)

[Node.JS](https://nodejs.org/en/)

[React.JS](https://reactjs.org/)

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Klasörler 
Bu websitesi [create-react-app](https://github.com/facebook/create-react-app#readme) kullanılarak oluşturulmuştur, dolayısıyla standart create-react-app dizin yapısını kullanmaktadır.

`./src` react-scripts tarafından derlenilen, react.js frameworkü kullanılarak oluşturulmuş dosyalar burada bulunur. aynı zamanda sitenin tüm kodu buradadır.

`./public` üzerinde herhangi bir değişiklik yapılmadan `build` klasörüne iletilen dosyalar burada bulunur.

`./build` react-scripts tarafından derlenilen kaynak kodu ile beraber `public` klasöründen kopyalanan dosyalar bulunur. bu dosyalar bütünü direk tarayıcı üzerinden görüntülenebilen websitesini oluşturur. bu klasör github üzerinde bulundurulmaz ve yerel olarak `npm build` komudu çalıştırılarak elde edilir.

## Geliştirme
Sıfırdan başlayıp geliştirme yapmak istiyorsanız aşağıdaki adımları takip edebilirsiniz.

Bu işlemleri gerçekleştirmek için [Node.JS](https://nodejs.org/en/) ve [Git](https://git-scm.com/) indirmeniz gerekir.

```bash
$ git clone https://github.com/hcandar/enka360.git    # bu repository'i bilgisayarınıza kopyalar

$ cd ./enka360    # bu repository'nin bulunduğu klasöre girer

$ npm install     # gerekli dependency'leri indirir

$ npm start       # kodunuz derlenir, local olarak hostlanır ve bir tarayıcısı penceresi açılır. 
                  # bu süreçte kodunuzu değiştirirseniz değişikler buraya yansıyacaktır.
                  # eğer tarayıcı otomatik açılmazsa http://localhost:3000 adresine girin
```

NOT: Bu aşamalar `build` dosyası oluşturmaz. Eğer `build` dosyası oluşturup siteyi herhangi bir web sunucusu üzerinde hostlamak istiyorsanız sonraki aşamayı takip edin.

## Derleme aşaması
Sitemiz react.js, jsx gibi teknolojiler kullandığından bu tür dosyalar direkt olarak tarayıcı üzerinde görüntülenemez. Bu yüzden kaynak kodunu tarayıcılar tarafından görüntelenebilecek bir hale çevirmek için aşağıdaki adımlar uygulanır.

Derleme işlemini gerçekleştirmek için [Node.JS](https://nodejs.org/en/) indirmeniz gerekir. 

```bash
$ cd ./enka360    # bu repository'nin bulunduğu klasöre girin

$ npm install     # gerekli dependency'leri indirir

$ npm build       # projeyi derler ve ./build klasörü elde edilir
```

Bu aşamadan sonra `build` klasörü herhangi bir web sunucusu tarafından hostlanabilir ve tarayıcı üzerinden görüntülenebilir.

Geliştirme yapılırken tekrar tekrar projeyi derlemek yerine `npm start` komudunu kullanmanız tavsiye edilir. Bu komut kodunuzu otomatik olarak derler ve sitenizi localhost üzerinde hostlar. Komut çalıştırıldıktan sonra otomatik olarak bir web penceresi açılır. siz kod üzerinde değişiklik yaptıkça site yenilenir.

