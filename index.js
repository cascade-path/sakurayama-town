        // ナビゲーションのタブ
        const navLink = document.querySelectorAll("nav .nav-link");
        
        // カルーセルのアニメーション(クラス付け替え)
        const banner = document.querySelectorAll(".carousel img");

        let index = 1;

        banner[0].classList.add("active");
        function showNext() {
            banner[index].classList.remove("next");
            banner[index].classList.add("active");
            banner[(index - 1 + banner.length) % banner.length].classList.remove("active");
            banner[(index + 1) % banner.length].classList.add("next");
            index = (index + 1) % banner.length;
        }

        setInterval(showNext, 4000);

        // ハンバーガーメニュー
        const hamburger = document.getElementById("nav-wrap");
        const hamburgerTrigger = document.getElementById("hamburger_open");
        hamburgerTrigger.addEventListener("click",()=>{
            if(hamburgerTrigger.classList.contains("open-x")){
                hamburger.classList.remove("open");
                hamburgerTrigger.classList.remove("open-x");
            } else {
                hamburger.classList.add("open");
                hamburgerTrigger.classList.add("open-x"); 
            }
        });
        hamburger.addEventListener("click",(e)=>{
            if(e.target.closest("nav")) return;
            hamburger.classList.remove("open");
        });

        /* ナビゲーションに変数を設定 */
        for(let i = 0; i < navLink.length; i++){
            navLink[i].style.setProperty("--delay",i);
        }

        /* alert */
        const modalAlert = document.getElementById("modal-alert");
        const modalAlertClose = document.getElementById("modal-alert-close");
        function modalAlertActive(text){
            modalAlert.classList.add("active");
            // modalAlertText.
        }

        navLink.forEach(link => {
            link.addEventListener("click",() => {
                modalAlertActive();
            });
        });

        modalAlertClose.addEventListener("click",() => {
            modalAlert.classList.remove("active");
        });
