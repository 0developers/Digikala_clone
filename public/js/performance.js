function performanceMode(mode) {
    if (mode) {
      const svgs = document.querySelectorAll("svg");

      svgs.forEach((svg) => {
        svg.style.visibility = "collapse";
      });
      const imgs = document.querySelectorAll("img");

      imgs.forEach((img) => {
        img.style.visibility = "collapse";
      });
      imgs.forEach((img) => {
        img.src = "";

        img.remove();
      });
      document.querySelectorAll("*").forEach((element) => {
        element.style.fontFamily = "monospace";
      });
    } else {
      const svgs = document.querySelectorAll("svg");

      svgs.forEach((svg) => {
        svg.style.visibility = "visible";
      });
      const imgs = document.querySelectorAll("img");

      imgs.forEach((img) => {
        img.style.visibility = "visible";
      });
      
      document.querySelectorAll("*").forEach((element) => {
        element.style.fontFamily = "digiFont";
      });
    }
  }
