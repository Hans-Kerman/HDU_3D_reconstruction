// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到锚点
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 模拟3D模型控制功能
    const modelViewer = document.getElementById('model-viewer');
    if (modelViewer) {
        // 模拟加载3D模型
        setTimeout(() => {
            modelViewer.innerHTML = `
                <div class="model-placeholder">
                    <div class="model-canvas">
                        <div class="building block-1"></div>
                        <div class="building block-2"></div>
                        <div class="building block-3"></div>
                        <div class="building block-4"></div>
                        <div class="ground"></div>
                    </div>
                    <p>杭电校园3D模型展示区</p>
                </div>
            `;
            
            // 添加模型控制事件监听器
            document.getElementById('rotate-btn')?.addEventListener('click', function() {
                alert('旋转功能已激活！在实际应用中，这里会旋转3D模型。');
            });
            
            document.getElementById('zoom-in-btn')?.addEventListener('click', function() {
                alert('放大功能已激活！在实际应用中，这里会放大3D模型。');
            });
            
            document.getElementById('zoom-out-btn')?.addEventListener('click', function() {
                alert('缩小功能已激活！在实际应用中，这里会缩小3D模型。');
            });
            
            document.getElementById('reset-btn')?.addEventListener('click', function() {
                alert('视角已重置！在实际应用中，这里会重置3D模型视角。');
            });
        }, 1000);
    }

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的留言！在实际应用中，您的信息将被发送到我们的服务器。');
            this.reset();
        });
    }
});

// 滚动时导航栏效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});