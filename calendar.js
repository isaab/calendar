$(document).ready(function () {
    // $(".search").click(function () {
    //     $(".nav-pills").css({ "color": "white" }).html("<input placeholder='TYPE AND HIT ENTER'></input><b>X</b>");
    //     $("input").css({
    //         "width":"98%",
    //         "padding":"8px",
    //         "font-size":"30px",
    //         "background":"transparent",
    //         "color":"white",
    //         "border":"0px"
    //  });
    //     console.log("A")
    // })

    $("#calendar").fullCalendar({
        header: {
            left: "prev",
            center: "title",
            right: "next"
        }
    });
    var i = 1;
    $(".fornumber").click(function () {

        if (i == 1) {
            $(".kvadrat").css({
                "display": "block"
            })
            i = 0;
        } else {
            $(".kvadrat").css({
                "display": "none"
            })
            i = 1;
        }
        console.log(i)
    })
    $(document).ready(function () {
        $('#sidebar-btn').click(function () {
            console.log($('#sidebar').width());
            $('#sidebar-btn').toggleClass('visible1');
            $('#sidebar').toggleClass('visible');
        });
        var accordion = document.querySelector('#sidebar');
        accordion.addEventListener('click', function (event) {
            var item = event.target;
            if (item.nextElementSibling.style.display == 'block') {
                $(".pages").hide();
                $(".galery").hide();
                $(".blog").hide();
            } else {
                $(".pages").hide();
                $(".galery").hide();
                $(".blog").hide();
                item.nextElementSibling.style.display = 'block';
            }
        });
    });
    $(window).scroll(function () {

        scroll = $(window).scrollTop();
        console.log(scroll)
        if (scroll >= 118) {
            $(".menu").css({
                "position": "fixed",
                "top": 0,
                "left": 0,
                "width": "100vw"
            });

        } else {
            $(".menu").css({
                "position": "static",
                "width": "inherit"
            });

        }
        if (scroll >= 500) {
            $(".daire").css({
                "position": "fixed",
                "bottom": 0,
                "right": 10
            });
        } else {
            $(".daire").css({
                "position": "absolute",
                "right": "10px",
                "bottom": "-500px"
            });

        }

    });
      $('.daire').click(function(){
       $('html, body').animate({ scrollTop: 0 }, "slow")
       return false;
   })

});
