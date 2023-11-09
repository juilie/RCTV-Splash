
window.addEventListener("load", (e)=>{

        let tandyBanner = document.querySelector("#rcBanner")
            for (let i = 0; i < 500; i++) {
                ribbons[i] = new ribbon(images[floor(random(0, 1))], random(0, 100), random(0, width), -2000);
            }

            setTimeout(() => {
                tandyBanner.style.opacity = 1;
            }, 1200);
            setTimeout(() => {
                tandyBanner.style.opacity = 0
            }, 5800);
    }
)