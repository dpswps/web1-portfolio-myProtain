window.addEventListener('DOMContentLoaded', function () {
    if (!window.gsap) {
        return;
    }

    if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    gsap.from('header', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    if (document.querySelector('.mySwiper .textbox')) {
        gsap.from('.mySwiper .textbox > *', {
            y: 36,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: 0.15,
            ease: 'power3.out'
        });
    }

    if (document.querySelector('#hero_sub .hero_text')) {
        gsap.from('#hero_sub .hero_text > *', {
            x: -36,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: 0.15,
            ease: 'power3.out'
        });
    }

    var revealTargets = [
        '#section01 .board',
        '#section02 .sec2_title',
        '#section02 .content li',
        '#section03 .content li',
        '#section04 .sec4_title',
        '#section04 .content li',
        '.content_sub h2',
        '.content_sub .content_box > .content > li',
        '.utility_head',
        '.utility_panel',
        '.utility_form',
        '.cart_table',
        '.cart_summary'
    ].join(',');

    gsap.utils.toArray(revealTargets).forEach(function (item, index) {
        var config = {
            y: 44,
            opacity: 0,
            duration: 0.75,
            delay: (index % 5) * 0.04,
            ease: 'power3.out'
        };

        if (window.ScrollTrigger) {
            config.scrollTrigger = {
                trigger: item,
                start: 'top 86%',
                toggleActions: 'play none none reverse'
            };
        }

        gsap.from(item, config);
    });

    gsap.utils.toArray('header nav .gnb a, .mySwiper .textbox a, #section03 .cta_btn').forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            gsap.to(item, {
                scale: 1.05,
                duration: 0.22,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', function () {
            gsap.to(item, {
                scale: 1,
                duration: 0.22,
                ease: 'power2.out'
            });
        });
    });
});
