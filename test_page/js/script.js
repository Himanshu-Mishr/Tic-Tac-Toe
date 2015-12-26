        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                items: 3,
                dots: false,
                center: true,
                stagePadding: 340, // to show how much content will be visible
                responsive: { // screen size and respective no. of item that you want to see.
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        });

        function showStaff(staffID) {
            var staff_large_photo = document.getElementById("staff-large");
            var about_staff = document.getElementById("about-staff");
            switch (staffID) {
                case 1:
                    staff_large_photo.src = "image/staff1_large.jpg";
                    about_staff.innerHTML = "<b>BACKEND TEAM</b><h1>Angela</h1><hr><b>What do you do at Cozee ?</b><br><p>I am part of the back end team and work on the network generation part of the application.</p><b>Where did you grow up?</b><br><p>I grew up in Bogota, Colombia. It's probably also one of my favorite cities, at 2600m above sea level, it has cool, San Francisco like weather all year round: One of the reasons I love both places.</p>"
                    break;
                case 2:
                    staff_large_photo.src = "image/staff2_large.jpg";
                    about_staff.innerHTML = "<b>OPERATION</b><h1>Michael</h1><hr><b>What do you do at Cozee ?</b><br><p>I manage and I am responsible for all People Operations here at Quid.</p><b>What's special about the people at Quid?</b><br><p>They're all independent go-getters with a common purpose.</p>"
                    break;
                case 3:
                    staff_large_photo.src = "image/staff3_large.jpg";
                    about_staff.innerHTML = "<b>COMMERCIAL TEAM</b><h1>Emily</h1><hr><b>What do you do at Cozee ?</b><br><p>I'm currently focused on growing the Quid healthcare team and I'm responsible for identifying the overlap between healthcare user needs and Quid capabilities. I love innovating in this space and constantly think about new data sets and features to add for our healthcare users. In addition, I lead many client services projects and continue to build strong relationships with our expanding client base.</p><b>What do you like best about your job?</b><br><p>I love helping users understand how Quid can map the evolution of human thought - from patient discussions to scientific research to start up ideas - and how that can lead to major business value.</p>"
                    break;
                default:
                    staff_large_photo.src = "image/staff1_large.jpg";
                    about_staff.innerHTML = "<b>BACKEND TEAM</b><h1>Angela</h1><hr><b>What do you do at Cozee ?</b><br><p>I am part of the back end team and work on the network generation part of the application.</p><b>Where did you grow up?</b><br><p>I grew up in Bogota, Colombia. It's probably also one of my favorite cities, at 2600m above sea level, it has cool, San Francisco like weather all year round: One of the reasons I love both places.</p>"
                    break;
            }
            document.getElementById('staff1thumbnail').style.cssText = 'box-shadow: none;';
            document.getElementById('staff2thumbnail').style.cssText = 'box-shadow: none;';
            document.getElementById('staff3thumbnail').style.cssText = 'box-shadow: none;';
            switch (staffID) {
                case 1:
                    document.getElementById('staff1thumbnail').style.cssText = 'box-shadow: 0px 0px 5px 1px #424242;';
                    break;
                case 2:
                    document.getElementById('staff2thumbnail').style.cssText = 'box-shadow: 0px 0px 5px 1px #424242;';
                    break;
                case 3:
                    document.getElementById('staff3thumbnail').style.cssText = 'box-shadow: 0px 0px 5px 1px #424242;';
                    break;
                default:
                    document.getElementById('staff1thumbnail').style.cssText = 'box-shadow: 0px 0px 5px 1px #424242;';
                    break;

            }
        }