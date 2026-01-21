/*
Theme Name: Vibrant 
Author URI: http://webthemez.com/
Description: This theme is a best responsive web template. It would be great for a corporate websites, business websites, personal blog.
License: Free to use for personal and commercial, but you need to place back link in the bottom of the template.
*/
var customScripts = {
    profile: function () {
     	 var portfolio = $('#portfolio');
		var items = $('.items', portfolio); 
		var filters = $('.filters li a', portfolio); 
	
		items.imagesLoaded(function() {
			items.isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows',
				transitionDuration: '0.7s'
			});
		});
		
		filters.click(function(){
			var el = $(this);
			filters.removeClass('active');
			el.addClass('active');
			var selector = el.attr('data-filter');
			items.isotope({ filter: selector });
			return false;
		});            
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#features').offset().top - 75 }, "slow"); 
                return false;
            });
    }, 
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */		   			  
			$('#aboutUs').waypoint(function() {				
			$('.design').addClass( 'animated fadeInUp show' );   
			}, { offset: 350 }); 
			
			$('.features').waypoint(function() { 
			$('.phone-image').addClass( 'animated bounceIn' ); 
			$('.features-left').addClass( 'animated fadeInLeft show' );   
			$('.features-right').addClass( 'animated fadeInRight show' );  
			}, { offset: 350 });
			$('#services').waypoint(function() {    
			$('.serviceBox').addClass( 'animated fadeInRight show' );  
			$('.owl-wrapper-outer').addClass( 'animated fadeInRight show' ); 
			}, { offset: 350 });
			$('#work').waypoint(function() {    
			 $('#portfolio').addClass( 'animated fadeInRight show' ); 
			}, { offset: 350 });
			
			
		},
		fitText: function(){			  
				setTimeout(function() {			
				$('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '40px' });			
				}, 100);
		},
    loadNavigation: function () {
        // 현재 페이지 경로 분석
        var path = window.location.pathname;
        var pathParts = path.split('/').filter(function(p) { return p && p !== 'autoware-korea'; });
        var currentPage = 'index';
        
        // 경로에서 페이지 이름 추출
        if (pathParts.length > 0) {
            var lastPart = pathParts[pathParts.length - 1];
            if (lastPart === '' || lastPart === 'index.html' || lastPart === 'index') {
                if (pathParts.length > 1) {
                    // 서브폴더의 index.html인 경우
                    currentPage = pathParts[pathParts.length - 2];
                } else {
                    currentPage = 'index';
                }
            } else {
                currentPage = lastPart.replace('.html', '');
            }
        }
        
        // 기존 nav-container 제거하고 새로 생성 (항상 body 맨 앞에)
        $('#nav-container').remove();
        $('body').prepend('<div id="nav-container"></div>');
        
        // nav.html 파일 경로 결정 (현재 위치에 따라)
        var navPath = 'nav.html';
        var currentPath = window.location.pathname;
        if (currentPath.indexOf('/about/') > -1 || currentPath.indexOf('/getting-started/') > -1 || 
            currentPath.indexOf('/join/') > -1 || currentPath.indexOf('/resources/') > -1 || 
            currentPath.indexOf('/events/') > -1) {
            navPath = '../nav.html';
        }
        
        // nav.html 파일에서 네비게이션 로드
        $('#nav-container').load(navPath, function() {
            // 서브폴더에서 로드된 경우 경로 수정
            if (navPath === '../nav.html') {
                // 로고 링크 및 이미지 경로 수정
                $('.navbar-brand').attr('href', '../index.html');
                $('.navbar-brand img').attr('src', '../images/logo_awk_only.png');
                
                // 메뉴 링크 경로 수정
                $('#mainNav a[href^="index.html"]').attr('href', '../index.html');
                $('#mainNav a[href^="about/"]').each(function() {
                    var href = $(this).attr('href');
                    $(this).attr('href', '../' + href);
                });
                $('#mainNav a[href^="getting-started/"]').each(function() {
                    var href = $(this).attr('href');
                    $(this).attr('href', '../' + href);
                });
                $('#mainNav a[href^="join/"]').each(function() {
                    var href = $(this).attr('href');
                    $(this).attr('href', '../' + href);
                });
                $('#mainNav a[href^="resources/"]').each(function() {
                    var href = $(this).attr('href');
                    $(this).attr('href', '../' + href);
                });
                $('#mainNav a[href^="events/"]').each(function() {
                    var href = $(this).attr('href');
                    $(this).attr('href', '../' + href);
                });
            }
            
            // 현재 페이지에 active 클래스 추가
            $('#mainNav li[data-page="' + currentPage + '"]').addClass('active');
            if (currentPage === 'index' && pathParts.length <= 1) {
                $('#mainNav li[data-page="index"]').attr('id', 'firstLink');
            }
            
            // 다른 페이지에서도 네비게이션 배경 추가
            if (currentPage !== 'index' || pathParts.length > 1) {
                $('.header').addClass('addBg');
            }
            
            // 드롭다운 메뉴 초기화
            $('.dropdown-toggle').dropdown();
            
            // Bootstrap collapse 초기화 (햄버거 메뉴)
            $('#nav-toggle').on('click', function() {
                $('#main-nav').collapse('toggle');
            });
            
            // 모바일에서 메뉴 링크 클릭 시 메뉴 닫기
            $('#main-nav a').on('click', function() {
                if ($(window).width() < 768) {
                    $('#main-nav').collapse('hide');
                }
            });
            
            // 네비게이션 로드 후 다른 스크립트 초기화
            customScripts.init();
            
            // 스크롤 이벤트 설정
            $(window).scroll(function() {
                if ($(window).scrollTop() > 50) {
                    $('.header').addClass('addBg');
                } else {
                    // index.html의 첫 번째 섹션에서는 배경 제거
                    if (currentPage === 'index' && pathParts.length <= 1) {
                        if ($('#main-nav ul li:first-child').hasClass('active')) {
                            $('.header').removeClass('addBg');
                        }
                    }
                }
            });
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox(); 
        customScripts.owlSlider();
		customScripts.waySlide();
		customScripts.fitText();
        customScripts.bannerHeight();
    }
}
$(document).ready(function () {
	// 네비게이션 로드
	customScripts.loadNavigation();
	
	// 애니메이션 요소 초기화
	setTimeout(function() {
		$('.features-left, .features-right, .design, .serviceBox, .owl-wrapper-outer, #portfolio').css('opacity','0');
	}, 100);
	
	// 중앙 이미지를 중간 박스와 정렬
	function alignCenterImageWithMiddleBox() {
		var $leftMiddleBox = $('.features-left .feature:nth-child(2)');
		var $rightMiddleBox = $('.features-right .feature:nth-child(2)');
		var $centerImage = $('.features .phone-image');
		var $centerContainer = $('.features .col-md-4:nth-child(2)');
		
		if ($leftMiddleBox.length && $rightMiddleBox.length && $centerImage.length && $centerContainer.length) {
			// 중간 박스들의 위치와 높이 계산
			var leftMiddleTop = $leftMiddleBox.position().top;
			var rightMiddleTop = $rightMiddleBox.position().top;
			var leftMiddleHeight = $leftMiddleBox.outerHeight();
			var rightMiddleHeight = $rightMiddleBox.outerHeight();
			
			// 평균 위치와 높이 계산
			var averageTop = (leftMiddleTop + rightMiddleTop) / 2;
			var averageHeight = (leftMiddleHeight + rightMiddleHeight) / 2;
			
			// 중간 박스의 중앙 위치
			var middleBoxCenter = averageTop + (averageHeight / 2);
			
			// 중앙 이미지 컨테이너 내에서의 위치 계산
			var centerImageHeight = $centerImage.outerHeight();
			var targetPosition = middleBoxCenter - (centerImageHeight / 2);
			
			// 중앙 이미지 위치 조정 (컨테이너 기준)
			$centerImage.css({
				'position': 'relative',
				'top': targetPosition + 'px',
				'transform': 'none'
			});
		}
	}
	
	// 페이지 로드 및 리사이즈 시 정렬
	$(document).ready(function() {
		setTimeout(alignCenterImageWithMiddleBox, 300);
	});
	
	$(window).on('resize', function() {
		setTimeout(alignCenterImageWithMiddleBox, 100);
	});
});