# CV Editör Projesi

Bu proje, kullanıcıların çevrimiçi olarak CV oluşturmasını ve düzenlemesini sağlayan bir web uygulamasıdır. Fabric.js kütüphanesi kullanılarak geliştirilmiş interaktif bir CV editörü içerir.

## Özellikler

- 3 farklı hazır CV şablonu
- Metin düzenleme ve formatlama
- Resim ekleme
- PDF olarak indirme
- Madde ve başlık ekleme
- Sürükle-bırak ile düzenleme

## Proje Yapısı

### Önemli Dosyalar

```
├── Controllers/
│   ├── HomeController.cs        # Ana sayfa ve editör sayfası controller'ı
│
├── Views/
│   ├── Home/
│   │   ├── Index.cshtml        # Ana sayfa görünümü
│   │   └── Editor.cshtml       # CV editör sayfası
│   └── Shared/
│       └── _Layout.cshtml      # Sayfa şablonu
│
├── wwwroot/
│   ├── js/
│   │   └── fabricCv.js        # CV editörü ana JavaScript kodu
│   ├── css/
│   │   └── site.css           # Genel stil dosyası
│   └── lib/                   # Harici kütüphaneler
```

### Dosya Açıklamaları

#### fabricCv.js

- CV editörünün ana mantığını içerir
- Fabric.js canvas yönetimi
- Şablon tanımları ve yükleme
- Metin düzenleme işlemleri
- Format kontrolü ve stil yönetimi
- Resim yükleme ve PDF çıktı alma

#### Editor.cshtml

- CV editör arayüzü
- Format kontrol butonları
- Şablon seçim butonları
- Canvas alanı

#### HomeController.cs

- Sayfa yönlendirmeleri
- Temel controller işlemleri

## Kullanılan Teknolojiler

- ASP.NET Core MVC
- Fabric.js
- JavaScript
- Bootstrap
- jsPDF

## Kullanım

1. Ana sayfadan "CV Oluştur" butonuna tıklayın
2. İstediğiniz şablonu seçin
3. Metinleri düzenlemek için çift tıklayın
4. Format araç çubuğunu kullanarak stilleri değiştirin
5. İstediğiniz öğeleri ekleyin (resim, madde, başlık)
6. "PDF Olarak İndir" butonu ile CV'nizi indirin

## Notlar

- Metin düzenleme modunda diğer nesneler seçilemez
- Silme tuşu düzenleme modunda normal, diğer durumlarda nesneyi siler
- Resimler otomatik olarak boyutlandırılır
- PDF çıktısı yüksek çözünürlüklüdür

## Geliştirme

Yeni özellik eklemek veya hata düzeltmek için:

1. Yeni bir branch oluşturun
2. Değişikliklerinizi yapın
3. Pull request gönderin
