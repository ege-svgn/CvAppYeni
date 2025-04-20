window.addEventListener("DOMContentLoaded", () => {
  let selectedTemplate = "";

  // Şablon seçimi
  document.querySelectorAll(".select-template").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      selectedTemplate = e.target.closest(".template-card").dataset.template;
      document.getElementById("template-selection").style.display = "none";
      document.getElementById("form-card").style.display = "block";
    });
  });

  // Önizleme
  document.getElementById("preview-btn").addEventListener("click", async () => {
    const data = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      education: document.getElementById("education").value,
      experience: document.getElementById("experience").value,
    };

    const res = await fetch(`/templates/${selectedTemplate}`);
    const tpl = await res.text();
    const container = document.getElementById("cv-preview");
    container.innerHTML = tpl;

    // Veri yerleştirme
    Object.entries(data).forEach(([k, v]) => {
      const el = container.querySelector(`#tpl-${k}`);
      if (el) el.textContent = v;
    });

    document.getElementById("preview-area").style.display = "block";
  });

  // PDF indir
  document.getElementById("download-pdf").addEventListener("click", () => {
    html2pdf()
      .from(document.getElementById("cv-preview"))
      .set({ margin: 1, filename: "cviniz.pdf", html2canvas: { scale: 2 } })
      .save();
  });
});
