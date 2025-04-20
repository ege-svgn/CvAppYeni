// wwwroot/js/fabricCv.js

window.addEventListener("DOMContentLoaded", () => {
  const canvas = new fabric.Canvas("cvCanvas", {
    backgroundColor: "#fff",
    selection: true,
  });

  // Temel yardımcı fonksiyonlar
  function createRect(options) {
    return new fabric.Rect({
      selectable: false,
      ...options,
    });
  }

  function createLine(points, options) {
    return new fabric.Line(points, {
      stroke: "#ddd",
      selectable: false,
      ...options,
    });
  }

  // Original templates object
  const templates = {
    template1: {
      objects: [
        // Sol kolon arka plan
        {
          type: "rect",
          options: {
            left: 0,
            top: 0,
            width: 250,
            height: 1000,
            fill: "#f8f9fa",
          },
        },
        // Ad Soyad
        {
          type: "IText",
          text: "AD SOYAD",
          options: {
            left: 280,
            top: 50,
            fontSize: 40,
            fill: "#2c3e50",
            fontFamily: "Arial",
            fontWeight: "bold",
          },
        },
        // Pozisyon
        {
          type: "IText",
          text: "POZİSYONUNUZ",
          options: {
            left: 280,
            top: 100,
            fontSize: 20,
            fill: "#34495e",
            fontFamily: "Arial",
          },
        },
        // Sol Kolon - İletişim Başlık
        {
          type: "IText",
          text: "İLETİŞİM",
          options: {
            left: 30,
            top: 30,
            fontSize: 20,
            fill: "#2c3e50",
            fontFamily: "Arial",
            fontWeight: "bold",
          },
        },
        // Sol Kolon - İletişim Detaylar
        {
          type: "Textbox",
          text: "Email: ornek@email.com\nTelefon: +90 555 555 55 55\nAdres: İstanbul, Türkiye",
          options: {
            left: 30,
            top: 70,
            width: 190,
            fontSize: 14,
            fill: "#34495e",
            fontFamily: "Arial",
            lineHeight: 1.5,
          },
        },
        // Sol Kolon - Yetenekler Başlık
        {
          type: "IText",
          text: "YETENEKLER",
          options: {
            left: 30,
            top: 170,
            fontSize: 20,
            fill: "#2c3e50",
            fontFamily: "Arial",
            fontWeight: "bold",
          },
        },
        // Sol Kolon - Yetenekler Detay
        {
          type: "Textbox",
          text: "• Yazılım Geliştirme\n• Proje Yönetimi\n• Problem Çözme\n• Takım Çalışması\n• İletişim",
          options: {
            left: 30,
            top: 210,
            width: 190,
            fontSize: 14,
            fill: "#34495e",
            fontFamily: "Arial",
            lineHeight: 1.5,
          },
        },
        // Ana Alan - Deneyim Başlık
        {
          type: "IText",
          text: "PROFESYONEL DENEYİM",
          options: {
            left: 280,
            top: 180,
            fontSize: 22,
            fill: "#2c3e50",
            fontFamily: "Arial",
            fontWeight: "bold",
          },
        },
        // Ayraç çizgi
        {
          type: "line",
          options: {
            points: [280, 215, 780, 215],
            stroke: "#3498db",
            strokeWidth: 2,
          },
        },
        // Deneyim Detayları
        {
          type: "Textbox",
          text: "Şirket Adı | 2020 - Devam\nKıdemli Yazılım Geliştirici\n• Önemli projelerin tasarım ve geliştirme süreçlerinde liderlik\n• Ekip yönetimi ve mentörlük\n\n",
          options: {
            left: 280,
            top: 230,
            width: 500,
            fontSize: 14,
            fill: "#34495e",
            fontFamily: "Arial",
            lineHeight: 1.6,
          },
        },
        // Eğitim Başlık
        {
          type: "IText",
          text: "EĞİTİM",
          options: {
            left: 280,
            top: 400,
            fontSize: 22,
            fill: "#2c3e50",
            fontFamily: "Arial",
            fontWeight: "bold",
          },
        },
        // Ayraç çizgi
        {
          type: "line",
          options: {
            points: [280, 435, 780, 435],
            stroke: "#3498db",
            strokeWidth: 2,
          },
        },
        // Eğitim Detayları
        {
          type: "Textbox",
          text: "Üniversite Adı | 2014 - 2018\nBilgisayar Mühendisliği\n• 3.85 GPA\n• Onur Öğrencisi",
          options: {
            left: 280,
            top: 450,
            width: 500,
            fontSize: 14,
            fill: "#34495e",
            fontFamily: "Arial",
            lineHeight: 1.6,
          },
        },
      ],
    },
    template2: {
      objects: [
        // Üst bölüm arka plan
        {
          type: "rect",
          options: {
            left: 0,
            top: 0,
            width: 800,
            height: 180,
            fill: "#34495e",
          },
        },
        // Ad Soyad
        {
          type: "IText",
          text: "AD SOYAD",
          options: {
            left: 400,
            top: 50,
            fontSize: 40,
            fill: "#fff",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            textAlign: "center",
            originX: "center",
          },
        },
        // Pozisyon
        {
          type: "IText",
          text: "POZİSYONUNUZ",
          options: {
            left: 400,
            top: 100,
            fontSize: 20,
            fill: "#ecf0f1",
            fontFamily: "Helvetica",
            textAlign: "center",
            originX: "center",
          },
        },
        // İletişim bilgileri
        {
          type: "IText",
          text: "Email: ornek@email.com | Tel: +90 555 555 55 55 | Adres: İstanbul, Türkiye",
          options: {
            left: 400,
            top: 140,
            fontSize: 14,
            fill: "#bdc3c7",
            fontFamily: "Helvetica",
            textAlign: "center",
            originX: "center",
          },
        },
        // Sol bölüm başlık - Deneyim
        {
          type: "IText",
          text: "PROFESYONEL DENEYİM",
          options: {
            left: 50,
            top: 220,
            fontSize: 22,
            fill: "#34495e",
            fontFamily: "Helvetica",
            fontWeight: "bold",
          },
        },
        // Deneyim detayları
        {
          type: "Textbox",
          text: "KIDEMLİ YAZILIM GELİŞTİRİCİ\nŞirket Adı | 2020 - Devam\n• Mikroservis mimarileri tasarımı ve implementasyonu\n• Ekip liderliği ve teknik mentörlük\n• Yüksek trafikli sistemlerin optimizasyonu\n\nYAZILIM GELİŞTİRİCİ\nŞirket Adı | 2018 - 2020\n• Full-stack web uygulamaları geliştirme\n• CI/CD süreçlerinin iyileştirilmesi\n• Kod kalitesi ve test coverage artırımı",
          options: {
            left: 50,
            top: 260,
            width: 350,
            fontSize: 14,
            fill: "#2c3e50",
            fontFamily: "Helvetica",
            lineHeight: 1.6,
          },
        },
        // Sağ bölüm başlık - Yetenekler
        {
          type: "IText",
          text: "YETENEKLER",
          options: {
            left: 480,
            top: 220,
            fontSize: 22,
            fill: "#34495e",
            fontFamily: "Helvetica",
            fontWeight: "bold",
          },
        },
        // Yetenekler detay
        {
          type: "Textbox",
          text: "TEKNİK\n• JavaScript, TypeScript, Python\n• React, Node.js, Express\n• AWS, Docker, Kubernetes\n• SQL, MongoDB, Redis\n\nKİŞİSEL\n• Analitik düşünme\n• Problem çözme\n",
          options: {
            left: 480,
            top: 260,
            width: 300,
            fontSize: 14,
            fill: "#2c3e50",
            fontFamily: "Helvetica",
            lineHeight: 1.6,
          },
        },
        // Eğitim başlık
        {
          type: "IText",
          text: "EĞİTİM",
          options: {
            left: 480,
            top: 500,
            fontSize: 22,
            fill: "#34495e",
            fontFamily: "Helvetica",
            fontWeight: "bold",
          },
        },
        // Eğitim detay
        {
          type: "Textbox",
          text: "BİLGİSAYAR MÜHENDİSLİĞİ\nÜniversite Adı | 2014 - 2018\n• 3.85 GPA\n• Onur Öğrencisi\n• Algoritma Kulübü Başkanı",
          options: {
            left: 480,
            top: 540,
            width: 300,
            fontSize: 14,
            fill: "#2c3e50",
            fontFamily: "Helvetica",
            lineHeight: 1.6,
          },
        },
      ],
    },
    template3: {
      objects: [
        // Üst kısım arka plan
        {
          type: "rect",
          options: {
            left: 0,
            top: 0,
            width: 800,
            height: 150,
            fill: "#2c3e50",
          },
        },
        // Sol kolon arka plan
        {
          type: "rect",
          options: {
            left: 0,
            top: 150,
            width: 280,
            height: 850,
            fill: "#34495e",
          },
        },
        // Ad Soyad
        {
          type: "IText",
          text: "AD SOYAD",
          options: {
            left: 50,
            top: 50,
            fontSize: 40,
            fill: "#fff",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
          },
        },
        // Pozisyon
        {
          type: "IText",
          text: "POZİSYONUNUZ",
          options: {
            left: 50,
            top: 100,
            fontSize: 20,
            fill: "#ecf0f1",
            fontFamily: "Times New Roman",
            fontStyle: "italic",
          },
        },
        // Sol kolon - Kişisel Bilgiler
        {
          type: "IText",
          text: "KİŞİSEL BİLGİLER",
          options: {
            left: 30,
            top: 180,
            fontSize: 18,
            fill: "#fff",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
          },
        },
        {
          type: "Textbox",
          text: "Email: ornek@email.com\nTelefon: +90 555 555 55 55\nAdres: İstanbul, Türkiye\nDoğum: 01.01.1990",
          options: {
            left: 30,
            top: 220,
            width: 220,
            fontSize: 14,
            fill: "#ecf0f1",
            fontFamily: "Times New Roman",
            lineHeight: 1.6,
          },
        },
        // Sol kolon - Yetenekler
        {
          type: "IText",
          text: "YETENEKLER",
          options: {
            left: 30,
            top: 350,
            fontSize: 18,
            fill: "#fff",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
          },
        },
        {
          type: "Textbox",
          text: "• Web Geliştirme\n• Mobil Uygulama\n• Veritabanı Yönetimi\n• Cloud Computing\n• UI/UX Tasarım",
          options: {
            left: 30,
            top: 390,
            width: 220,
            fontSize: 14,
            fill: "#ecf0f1",
            fontFamily: "Times New Roman",
            lineHeight: 1.6,
          },
        },
        // Ana alan - Profesyonel Özet
        {
          type: "IText",
          text: "PROFESYONEL ÖZET",
          options: {
            left: 310,
            top: 170,
            fontSize: 22,
            fill: "#2c3e50",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
          },
        },
        {
          type: "Textbox",
          text: "10+ yıllık deneyime sahip, yenilikçi çözümler üreten ve ekip liderliğinde başarılı bir profesyonel. Güçlü teknik altyapı ve proje yönetimi becerileri.",
          options: {
            left: 310,
            top: 210,
            width: 460,
            fontSize: 14,
            fill: "#34495e",
            fontFamily: "Times New Roman",
            lineHeight: 1.6,
          },
        },
        // Ana alan - Deneyim
        {
          type: "IText",
          text: "İŞ DENEYİMİ",
          options: {
            left: 310,
            top: 300,
            fontSize: 22,
            fill: "#2c3e50",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
          },
        },
        {
          type: "Textbox",
          text: "KIDEMLİ YAZILIM MİMARI | 2020 - Devam\nŞirket Adı\n• Enterprise uygulamalar için mimari tasarımlar\n• Teknik ekip liderliği (15+ kişi)\n• Performans optimizasyonları\n\nTEKNİK TAKIM LİDERİ | 2018 - 2020\nŞirket Adı\n• Çevik metodolojilerle proje yönetimi\n• Kod kalitesi ve standartların belirlenmesi\n• Junior geliştiricilere mentörlük",
          options: {
            left: 310,
            top: 340,
            width: 460,
            fontSize: 14,
            fill: "#34495e",
            fontFamily: "Times New Roman",
            lineHeight: 1.6,
          },
        },
      ],
    },
  };

  // Şablon yükleme
  function loadTemplate(name) {
    const tpl = templates[name];
    canvas.clear();

    tpl.objects.forEach((def) => {
      let obj;
      if (def.type === "IText") {
        obj = new fabric.IText(def.text, def.options);
      } else if (def.type === "Textbox") {
        obj = new fabric.Textbox(def.text, def.options);
      } else if (def.type === "rect") {
        obj = createRect(def.options);
      } else if (def.type === "line") {
        obj = createLine(def.options.points, def.options);
      }
      canvas.add(obj);
      if (def.type === "rect" || def.type === "line") {
        obj.sendToBack();
      }
    });

    canvas.requestRenderAll();
  }

  // Şablon yükleme olayları
  document.querySelectorAll(".template-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".template-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      loadTemplate(btn.dataset.tpl);
    });
  });

  const initialTpl = window.initialTpl || "template1";
  const initBtn = document.querySelector(
    `.template-btn[data-tpl="${initialTpl}"]`
  );
  if (initBtn) initBtn.classList.add("active");
  loadTemplate(initialTpl);

  // Metin düzenleme yönetimi
  let isEditing = false;

  // Text editing events
  canvas.on({
    "mouse:dblclick": function (e) {
      if (
        !e.target ||
        !(
          e.target instanceof fabric.IText || e.target instanceof fabric.Textbox
        )
      )
        return;

      const target = e.target;
      if (target.isEditing) return;

      if (isEditing) {
        const active = canvas.getActiveObject();
        if (active && active !== target) {
          active.exitEditing();
        }
      }

      target.enterEditing();
      target.selectAll();
      canvas.requestRenderAll();
    },
    "text:editing:entered": function (e) {
      isEditing = true;
      e.target.isEditing = true;
      canvas.forEachObject((obj) => {
        if (obj !== e.target) obj.selectable = false;
      });
    },
    "text:editing:exited": function (e) {
      isEditing = false;
      e.target.isEditing = false;
      canvas.forEachObject((obj) => (obj.selectable = true));
    },
    "selection:created": updateFormatControls,
    "selection:updated": updateFormatControls,
    "selection:cleared": () => {
      document.querySelector(".text-format-controls").style.display = "none";
    },
  });

  // Klavye olayları
  document.addEventListener("keydown", (e) => {
    const obj = canvas.getActiveObject();
    if (!obj) return;

    if (e.key === "Delete" || e.key === "Backspace") {
      if (obj.isEditing) return;
      e.preventDefault();
      canvas.remove(obj);
      canvas.requestRenderAll();
      document.querySelector(".text-format-controls").style.display = "none";
    }
  });

  // Format controls
  function updateFormatControls() {
    const selected = canvas.getActiveObject();
    const controls = document.querySelector(".text-format-controls");

    if (
      selected &&
      (selected instanceof fabric.IText || selected instanceof fabric.Textbox)
    ) {
      controls.style.display = "inline-block";
      document.getElementById("fontFamily").value =
        selected.fontFamily || "Arial";
      document.getElementById("fontSize").value = selected.fontSize || "14";
      document.getElementById("textColor").value = selected.fill || "#000000";
      document
        .getElementById("makeBold")
        .classList.toggle("active", selected.fontWeight === "bold");
      document
        .getElementById("makeItalic")
        .classList.toggle("active", selected.fontStyle === "italic");
    } else {
      controls.style.display = "none";
    }
  }

  // Format event listeners
  document.getElementById("fontFamily").addEventListener("change", (e) => {
    const selected = canvas.getActiveObject();
    if (
      !selected ||
      !(selected instanceof fabric.IText || selected instanceof fabric.Textbox)
    )
      return;
    selected.set("fontFamily", e.target.value);
    canvas.renderAll();
  });

  document.getElementById("fontSize").addEventListener("change", (e) => {
    const selected = canvas.getActiveObject();
    if (
      !selected ||
      !(selected instanceof fabric.IText || selected instanceof fabric.Textbox)
    )
      return;
    selected.set("fontSize", parseInt(e.target.value));
    canvas.renderAll();
  });

  // Color picker
  const textColor = document.getElementById("textColor");
  textColor.addEventListener("input", function () {
    const obj = canvas.getActiveObject();
    if (!obj || !(obj instanceof fabric.IText || obj instanceof fabric.Textbox))
      return;
    obj.set("fill", this.value);
    canvas.requestRenderAll();
  });

  // Style buttons
  document.getElementById("makeBold").addEventListener("click", () => {
    const selected = canvas.getActiveObject();
    if (
      !selected ||
      !(selected instanceof fabric.IText || selected instanceof fabric.Textbox)
    )
      return;
    selected.set(
      "fontWeight",
      selected.fontWeight === "bold" ? "normal" : "bold"
    );
    canvas.renderAll();
    document.getElementById("makeBold").classList.toggle("active");
  });

  document.getElementById("makeItalic").addEventListener("click", () => {
    const selected = canvas.getActiveObject();
    if (
      !selected ||
      !(selected instanceof fabric.IText || selected instanceof fabric.Textbox)
    )
      return;
    selected.set(
      "fontStyle",
      selected.fontStyle === "italic" ? "normal" : "italic"
    );
    canvas.renderAll();
    document.getElementById("makeItalic").classList.toggle("active");
  });

  // Object creation buttons
  document.getElementById("addBullet").addEventListener("click", () => {
    const bulletText = prompt("Madde metnini girin:", "Yeni madde");
    if (!bulletText) return;

    const bullet = new fabric.Textbox("• " + bulletText, {
      left: canvas.width / 2 - 150,
      top: canvas.height / 2 - 10,
      width: 300,
      fontSize: 14,
      fill: "#34495e",
      fontFamily: "Arial",
      lineHeight: 1.5,
    });
    canvas.add(bullet).setActiveObject(bullet);
    canvas.renderAll();
  });

  document.getElementById("addHeading").addEventListener("click", () => {
    const headingText = prompt("Başlık metnini girin:", "YENİ BAŞLIK");
    if (!headingText) return;

    const heading = new fabric.IText(headingText, {
      left: canvas.width / 2 - 100,
      top: canvas.height / 2 - 10,
      fontSize: 24,
      fill: "#2c3e50",
      fontFamily: "Arial",
      fontWeight: "bold",
      textAlign: "center",
    });
    canvas.add(heading).setActiveObject(heading);
    canvas.renderAll();
  });

  document.getElementById("addText").addEventListener("click", () => {
    const text = prompt("Eklenecek metni girin:", "Yeni Metin");
    if (!text) return;

    const itext = new fabric.IText(text, {
      left: canvas.width / 2 - 50,
      top: canvas.height / 2 - 10,
      fontSize: 18,
      fill: "#000",
      fontFamily: "Arial",
    });
    canvas.add(itext).setActiveObject(itext);
    canvas.renderAll();
  });

  // Image upload
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);

  document
    .getElementById("addImage")
    .addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    if (!e.target.files?.[0]) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      fabric.Image.fromURL(event.target.result, (img) => {
        img.set({
          left: canvas.width / 2 - (img.width * img.scaleX) / 2,
          top: canvas.height / 2 - (img.height * img.scaleY) / 2,
          scaleX: 0.5,
          scaleY: 0.5,
        });
        canvas.add(img).setActiveObject(img);
        canvas.renderAll();
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  });

  // PDF export
  document.getElementById("exportPdf").addEventListener("click", () => {
    const dataURL = canvas.toDataURL({ format: "png", multiplier: 2 });
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(dataURL, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("cviniz.pdf");
  });
});
