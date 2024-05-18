document.addEventListener("DOMContentLoaded", () => {
  fetch("/json/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Function untuk menambahkan elemen website
      function addWebsiteCard(container, website) {
        const card = document.createElement("div");
        card.className = "col-lg-3 cardlist d-flex align-items-end";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-duration", "500");
        card.style.backgroundImage = `url('${website.main_image}')`;

        const content = document.createElement("div");
        content.className = "haha";
        content.style.width = "100%";
        content.style.backgroundImage =
          "linear-gradient(to bottom, rgba(68, 40, 91, 0.08), rgba(68, 40, 91, 0.493))"; // Warna gradien baru

        const title = document.createElement("h3");
        title.style.color = "white";
        title.style.padding = "5px";
        title.style.paddingBottom = "0px";
        title.style.marginBottom = "0px";

        const link = document.createElement("a");
        link.href = `detail.html?id=${website.id}`;
        link.style.textDecoration = "none";
        link.style.color = "white";
        link.innerText = website.nama;

        title.appendChild(link);

        const detailLink = document.createElement("p");
        const detailAnchor = document.createElement("a");
        detailAnchor.href = `detail.html?id=${website.id}`;
        detailAnchor.style.textDecoration = "none";
        detailAnchor.style.color = "white";
        detailAnchor.innerText = "View detail";
        detailLink.style.margin = "0px";
        detailLink.style.marginLeft = "5px";
        detailLink.style.padding = "0px";
        detailAnchor.style.margin = "0px";
        detailAnchor.style.padding = "0px";
        detailLink.appendChild(detailAnchor);

        content.appendChild(title);
        content.appendChild(detailLink);
        card.appendChild(content);
        container.appendChild(card);
      }

      // Dapatkan elemen container
      const container = document.getElementById("website-container");

      // Filter dan tambahkan elemen website
      data
        .filter((item) => item.kategori === "Website")
        .forEach((item) => addWebsiteCard(container, item));
    })
    .catch((error) => console.error("Error fetching data:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("/json/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Function untuk menambahkan elemen website
      function addWebsiteCard(container, website) {
        const card = document.createElement("div");
        card.className = "col-lg-3 cardlist d-flex align-items-end";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-duration", "500");
        card.style.backgroundImage = `url('${website.main_image}')`;

        const content = document.createElement("div");
        content.className = "haha";
        content.style.width = "100%";
        content.style.backgroundImage =
          "linear-gradient(to bottom, rgba(68, 40, 91, 0.08), rgba(68, 40, 91, 0.493))"; // Warna gradien baru

        const title = document.createElement("h3");
        title.style.color = "white";
        title.style.padding = "5px";
        title.style.paddingBottom = "0px";
        title.style.marginBottom = "0px";

        const link = document.createElement("a");
        link.href = `detail.html?id=${website.id}`;
        link.style.textDecoration = "none";
        link.style.color = "white";
        link.innerText = website.nama;

        title.appendChild(link);

        const detailLink = document.createElement("p");
        const detailAnchor = document.createElement("a");
        detailAnchor.href = `detail.html?id=${website.id}`;
        detailAnchor.style.textDecoration = "none";
        detailAnchor.style.color = "white";
        detailAnchor.innerText = "View detail";
        detailLink.style.margin = "0px";
        detailLink.style.marginLeft = "5px";
        detailLink.style.padding = "0px";
        detailAnchor.style.margin = "0px";
        detailAnchor.style.padding = "0px";
        detailLink.appendChild(detailAnchor);

        content.appendChild(title);
        content.appendChild(detailLink);
        card.appendChild(content);
        container.appendChild(card);
      }

      // Dapatkan elemen container
      const container = document.getElementById("website-container-2");

      // Filter dan tambahkan elemen website
      data
        .filter((item) => item.kategori === "Pengalaman")
        .forEach((item) => addWebsiteCard(container, item));
    })
    .catch((error) => console.error("Error fetching data:", error));
});
