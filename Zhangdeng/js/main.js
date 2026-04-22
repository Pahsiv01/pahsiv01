    // ---work页评价
    const track = document.getElementById("rowScroll");
    let isPaused = false;

    track.innerHTML += track.innerHTML;

    let scrollAmount = 0;
    let halfWidth = track.scrollWidth / 2; // 计算一份内容的宽度
    
    // 比如再往右偏移300px，数值越大，第一个气泡出现越晚
    scrollAmount = -halfWidth - 300; 

    function scrollCards() {
        if (!isPaused) {
            scrollAmount -= 1; // 控制滚动速度
            
            // 重置逻辑：当滚到0时，瞬间拉回起始点
            if (scrollAmount >= 0) {
                scrollAmount = -halfWidth;
            }
            track.style.transform = `translateX(${scrollAmount}px)`;
        }
        requestAnimationFrame(scrollCards);
    }
    scrollCards();

    document.querySelectorAll(".review-item").forEach(card => {
        card.addEventListener("mouseenter", () => {
            isPaused = true;
            card.classList.add("hovered"); // 添加新类
        });
        card.addEventListener("mouseleave", () => {
            isPaused = false;
            card.classList.remove("hovered"); // 移除新类
        });
    });