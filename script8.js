document.getElementById("btn").addEventListener(
    "click", () => {

        // create h2 tag
        const subhead = document.createElement("h2");
        subhead.textContent = "New Sub Heading";

        // create image
        const image = document.createElement("img");

        image.setAttribute(
            "src",
            "https://krmangalam.edu.in/images/tmu-k24/Firmuniversity.webp?1708"
        );

        image.setAttribute("alt", "K.R Mangalam");

        // append both h2 and image inside content div
        document.getElementById("content").append(subhead);
        document.getElementById("content").append(image);
    }
);