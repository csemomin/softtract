<?php
    require_once 'db.php'; 
    date_default_timezone_set("Asia/Dhaka");
    
    function notvalidNumber($msisdn) {
       $code = null;
       if (strlen($msisdn) == 11) {
           $code = substr($msisdn, 0, 3);
       } elseif (strlen($msisdn) == 13) {
           $code = substr($msisdn, 2, 3);
       } elseif (strlen($msisdn) == 14) {
           $code = substr($msisdn, 3, 3);
       }elseif (strlen($msisdn) == 15) {
           $code = substr($msisdn, 4, 3);
       }

       if($code != null && ($code == '014' || $code == '015' || $code == '016' || $code == '017' || $code == '018' || $code == '019')) {
           return false;
       } else {
           return true;
       }
   }

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $contact_time = date('Y-m-d H:i:s');
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        
       // $show = notvalidNumber($phone);
        $sql = "INSERT INTO `contact_user`(`id`, `subject`, `message`, `name`, `email`, `phone`, `contact_time`, `response_time`) VALUES (null,'$subject','$message',,'$name','$email','$phone','$contact_time','')";
    //   echo  
        // exit;
        
        $stmt = $db->prepare($sql);
    
        $insert_value = $stmt->execute();
        
        // var_dump($insert_value);exit;
    } 
        
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Softtract</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="img/favicon.png" rel="icon">
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet"> 
</head>

<body>

  <!--==========================
  Header
  ============================-->
  <header id="header" class="fixed-top">
    <div class="container">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> -->
        <!-- <a href="#intro" class="scrollto"><img src="img/logo.png" alt="" class="img-fluid"></a> -->
         <!-- Softtract -->
 
          <img src="img/logo.svg" class="img-fluid" style="width: 170px; object-fit: cover; height: 100%;" />
        </div>

      <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <li class="active"><a href="#intro">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <!-- <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li> -->
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav><!-- .main-nav -->
      
    </div>
  </header><!-- #header -->

  <!--==========================
    Intro Section
  ============================-->
  <section id="intro" class="clearfix">
    <div class="container">

      <div class="intro-img">
        <img src="img/intro-img.svg" alt="" class="img-fluid">
      </div>

      <div class="intro-info">
        <h2>Empowering Businesses with Smarter <span>Solutions</span></h2>
          <div>
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
          <a href="#services" class="btn-services scrollto">Our Services</a>
        </div>
      </div>

    </div>
  </section><!-- #intro -->

  <main id="main">

    <!--==========================
      About Us Section
    ============================-->
    <section id="about">
      <div class="container">
    
        <header class="section-header">
          <h3>About Us</h3>
          <p>Softtract is redefining the future of business with intelligent, technology-driven solutions tailored to your success.</p>
        </header>
    
        <div class="row about-container">
    
          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              At Softtract, we empower businesses to grow, adapt, and thrive in a digital world. Specializing in ERP, CRM, Chatbot development, Website creation, and AWS services, we deliver comprehensive solutions that streamline operations and enhance customer experiences. 
            </p>
    
            <div class="icon-box wow fadeInUp">
              <div class="icon"><i class="fa fa-cogs"></i></div>
              <h4 class="title"><a href="">Custom ERP Solutions</a></h4>
              <p class="description">Our ERP systems are designed to integrate seamlessly into your business processes, optimizing efficiency and productivity at every level.</p>
            </div>
    
            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div class="icon"><i class="fa fa-comments"></i></div>
              <h4 class="title"><a href="">AI-Powered Chatbots</a></h4>
              <p class="description">We create intelligent chatbots that automate customer interactions, providing 24/7 support and improving engagement across multiple platforms.</p>
            </div>
    
            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon"><i class="fa fa-cloud"></i></div>
              <h4 class="title"><a href="">Cloud & AWS Services</a></h4>
              <p class="description">Leverage the power of the cloud with our AWS services, enabling scalable, secure, and cost-effective infrastructure for your business.</p>
            </div>
    
          </div>
    
          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src="img/about-img.svg" class="img-fluid" alt="About Softtract">
          </div>
        </div>
    
        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp">
            <img src="img/about-extra-1.svg" class="img-fluid" alt="Our Mission">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Our Mission</h4>
            <p>
              Our mission is to drive business transformation by delivering innovative solutions that empower our clients to achieve more with less. We’re dedicated to creating technology that works for you, automating processes, and fostering growth.
            </p>
          </div>
        </div>
    
        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="img/about-extra-2.svg" class="img-fluid" alt="Why Choose Us">
          </div>
    
          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Why Choose Softtract?</h4>
            <p>
              We’re more than just a software company – we’re your partner in innovation. With a team of experts and a commitment to excellence, we offer solutions that are not only technologically advanced but also tailored to meet your unique business needs.
            </p>
          </div>
        </div>
    
      </div>
    </section>
    
    <!-- #about -->

    <!--==========================
      Services Section
    ============================-->
    <section id="services" class="section-bg">
      <div class="container">
    
        <header class="section-header">
          <h3>Services</h3>
          <p>We offer a wide range of technology solutions to help your business thrive in a competitive landscape.</p>
        </header>
    
        <div class="row">
    
          <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-cog-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="" onclick="return false;">Custom ERP Solutions</a></h4>
              <p class="description">Streamline and integrate your business processes with tailored ERP systems designed to optimize efficiency and growth.</p>
            </div>
          </div>
    
          <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-bookmarks-outline" style="color: #e9bf06;"></i></div>
              <h4 class="title"><a href="" onclick="return false;">AI-Powered Chatbots</a></h4>
              <p class="description">Automate customer interactions with intelligent, multi-platform chatbots for enhanced engagement and support.</p>
            </div>
          </div>
    
          <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-speedometer-outline" style="color: #3fcdc7;"></i></div>
              <h4 class="title"><a href="" onclick="return false;">CRM Solutions</a></h4>
              <p class="description">Manage your customer relationships with dynamic CRM systems, boosting sales, service, and retention efforts.</p>
            </div>
          </div>
    
          <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-paper-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="" onclick="return false;">Website Development</a></h4>
              <p class="description">Create modern, responsive, and user-friendly websites tailored to your brand, driving digital presence and growth.</p>
            </div>
          </div>
    
          <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-cloud-outline" style="color: #d6ff22;"></i></div>
              <h4 class="title"><a href="" onclick="return false;">Cloud & AWS Services</a></h4>
              <p class="description">Leverage the scalability and security of cloud infrastructure with our AWS solutions, ensuring seamless operations.</p>
            </div>
          </div>
    
          <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-briefcase-outline" style="color: #4680ff;"></i></div>
              <h4 class="title"><a href="" onclick="return false;">Software Development</a></h4>
              <p class="description">From custom applications to full-stack solutions, we deliver software that meets your business needs and drives innovation.</p>
            </div>
          </div>
    
        </div>
    
      </div>
    </section>
    
    <!-- #services -->

    <!--==========================
      Why Us Section
    ============================-->
    <section id="why-us" class="wow fadeIn">
      <div class="container">
        <header class="section-header">
          <h3>Why Choose Us?</h3>
          <p>At Softtract, we bring innovation, expertise, and commitment to every project, ensuring your business thrives in the digital era.</p>
        </header>
    
        <div class="row row-eq-height justify-content-center">
    
          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-diamond"></i>
              <div class="card-body">
                <h5 class="card-title">Expertise You Can Trust</h5>
                <p class="card-text">With years of experience in ERP, CRM, and cutting-edge technologies, we deliver solutions that are tailored, reliable, and scalable.</p>
                <!-- <a href="#" class="readmore">Learn more</a> -->
              </div>
            </div>
          </div>
    
          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-language"></i>
              <div class="card-body">
                <h5 class="card-title">Customer-Centric Approach</h5>
                <p class="card-text">We prioritize understanding your unique needs, providing personalized solutions that enhance efficiency and elevate customer experiences.</p>
                <!-- <a href="#" class="readmore">Learn more</a> -->
              </div>
            </div>
          </div>
    
          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-object-group"></i>
              <div class="card-body">
                <h5 class="card-title">Innovation at the Core</h5>
                <p class="card-text">Our focus on the latest technologies, including cloud computing and AI, ensures that your business stays ahead of the competition.</p>
                <!-- <a href="#" class="readmore">Learn more</a> -->
              </div>
            </div>
          </div>
    
        </div>
    
        <div class="row counters">
    
          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">4</span>
            <p>Satisfied Clients</p>
          </div>
          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">7</span>
            <p>Successful Projects</p>
          </div>
    
          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">3,364</span>
            <p>Hours of Support</p>
          </div>
    
          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">10</span>
            <p>Dedicated Team Members</p>
          </div>
    
        </div>
    
      </div>
    </section>
    

    <!--==========================
      Portfolio Section
    ============================-->
    <section id="portfolio" class="clearfix">
      <div class="container">

        <header class="section-header">
          <h3 class="section-title">Our Portfolio</h3>
        </header>

        <!-- <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> -->

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="img/portfolio/bpc/dashboard.png" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">BPC</a></h4>
                <p>
                  <!-- Discover BPC, our innovative software to transform your ideas into success. Using our AI, create accurate financial forecasts: balance sheets, income statements, and more. Our KPIs and analyzes guide you towards profitability. BPC also provides automated legal assistance: generate employment contracts, partner agreements, and other essential documents. Make starting your business easier with our technology. -->
                </p>
                <div>
                  <a href="img/portfolio/bpc/dashboard.png" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="https://staging.businessplancollaboratif.com" target="_blank" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="img/portfolio/bpc-ai/1.png" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">BPC.ai</a></h4>
                <!-- <p>Web</p> -->
                <div>
                  <a href="img/portfolio/bpc-ai/1.png" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="https://bpc-ai.com/" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="img/portfolio/coaching/9.png" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">Coaching Management</a></h4>
                <!-- <p>App</p> -->
                <div>
                  <a href="img/portfolio/coaching/9.png" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a onclick="return false;" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="img/portfolio/card2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">Card 2</a></h4>
                <p>Card</p>
                <div>
                  <a href="img/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="img/portfolio/web2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">Web 2</a></h4>
                <p>Web</p>
                <div>
                  <a href="img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="img/portfolio/app3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">Office</a></h4>
                <div>
                  <a href="img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div> -->
  
          <div class="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="img/portfolio/vector-power/1.png" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">Vector Power</a></h4>
                <!-- <p>Card</p> -->
                <div>
                  <a href="img/portfolio/vector-power/1.png" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="https://www.vectorpowerbd.com/" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="img/portfolio/solor/1.png" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">Solor</a></h4>
                <!-- <p>Card</p> -->
                <div>
                  <a href="img/portfolio/solor/1.png" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="https://www.bcsolarpower.com/" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="img/portfolio/web1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4><a onclick="return false;">Web 1</a></h4>
                <p>Web</p>
                <div>
                  <a href="img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div> -->

        </div>

      </div>
    </section><!-- #portfolio -->

    <!--==========================
      Clients Section
    ============================-->
    <section id="testimonials" class="section-bg">
      <div class="container">

        <header class="section-header">
          <h3>Testimonials</h3>
        </header>

        <div class="row justify-content-center">
          <div class="col-lg-8">

            <div class="owl-carousel testimonials-carousel wow fadeInUp">
      
              <div class="testimonial-item">
                <img src="img/bi.jpeg" class="testimonial-img" alt="Bi Diyoro Thierry GOORE">
                <h3>Bi Diyoro Thierry GOORE</h3>
                <h4>CEO at f.AI</h4>
                <p>
                  "This service has completely transformed our business. The team's dedication and expertise were evident in every step of the process. Highly recommended!"
                </p>
              </div>
      
              <div class="testimonial-item">
                <img src="img/borat.jpeg" class="testimonial-img" alt="Borat Hossain">
                <h3>Borat Hossain</h3>
                <h4>Busines Analyst, Apsis Solutions Ltd.</h4>
                <p>
                  "Working with this company has been a game-changer for our business. Sales increased dramatically after implementing their solutions."
                </p>
              </div>
      
              <div class="testimonial-item">
                <img src="img/tamim.jpeg" class="testimonial-img" alt="Gazi Md. Shahnewaz">
                <h3>Gazi Md. Shahnewaz</h3>
                <h4>Software Engineer, Apsis Solutions Ltd.</h4>
                <p>
                  "The attention to detail and customer support we received was second to none. Our projects were delivered on time and exceeded expectations."
                </p>
              </div>
      
              <div class="testimonial-item">
                <img src="img/testimonial-4.jpg" class="testimonial-img" alt="Emily Davis">
                <h3>Emily Davis</h3>
                <h4>Freelancer, Web Developer</h4>
                <p>
                  "I was blown away by the results. The team delivered beyond what I had imagined, and the process was smooth and efficient."
                </p>
              </div>
      
              <div class="testimonial-item">
                <img src="img/testimonial-5.jpg" class="testimonial-img" alt="Michael Lee">
                <h3>Michael Lee</h3>
                <h4>Entrepreneur, Startup Founder</h4>
                <p>
                  "Their innovative approach and expertise helped us overcome significant challenges and scale our business. I highly recommend their services."
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- #testimonials -->

    <!--==========================
      Team Section
    ============================-->
    <section id="team">
      <div class="container">
        <div class="section-header">
          <h3>Team</h3>  
          <p>Our expert team delivers innovative solutions, helping businesses thrive with cutting-edge technology and tailored services.</p> 
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6"></div>
          <div class="col-lg-3 col-md-6 wow fadeInUp">
            <div class="member">
              <img src="img/axel.jpeg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Joris Axel DA MATHA</h4>
                  <span>Project Manager</span>
                  <div class="social">
                    <!-- <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a> -->
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- 
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="member">
              <img src="img/borat.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Borat Hossain</h4>
                  <span>Product Manager</span>
                  <div class="social"> 
                    <a href="https://www.linkedin.com/in/borat-hossain-b5a2b6136/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="member">
              <img src="img/gazi.jpeg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Gazi Md. Shahnewaz</h4>
                  <span>Senior Software Engineer</span>
                  <div class="social"> 
                    <a href="https://www.linkedin.com/in/shahnewaztameem/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="member">
              <img src="img/momin.jpeg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Abdul Momin Ali</h4>
                  <span>Senior Software Engineer</span>
                  <div class="social">
                    <!-- <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a> -->
                    <a href="https://www.linkedin.com/in/mominali/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- #team -->

    <!--==========================
      Clients Section
    ============================-->
    <section id="clients" class="section-bg">

      <div class="container">
        
        <div class="section-header">
          <h3>Our Clients</h3>
          <p>We proudly partner with a diverse range of businesses, delivering tailored solutions that drive success and innovation.</p>
        </div>

        <div class="row no-gutters clients-wrap clearfix wow fadeInUp">

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo"> 
              <img src="img/clients/c-1.png" class="img-fluid" alt="">
            </div>
          </div>
          
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo">
              <img src="img/clients/logo.png.webp" class="img-fluid" alt="">
            </div>
          </div>
        
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo">
              <img src="img/clients/client-3.png" class="img-fluid" alt="">
            </div>
          </div>
          
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo">
              <img src="img/clients/client-4.png" class="img-fluid" alt="">
            </div>
          </div>
<!--           
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo">
              <img src="img/clients/client-5.png" class="img-fluid" alt="">
            </div>
          </div>
        
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo">
              <img src="img/clients/client-6.png" class="img-fluid" alt="">
            </div>
          </div>
          
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo">
              <img src="img/clients/client-7.png" class="img-fluid" alt="">
            </div>
          </div>
          
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo">
              <img src="img/clients/client-8.png" class="img-fluid" alt="">
            </div>
          </div> -->

        </div>

      </div>

    </section>

    <!--==========================
      Contact Section
    ============================-->
    <section id="contact">
      <div class="container-fluid">

        <div class="section-header">
          <h3>Contact Us</h3>
        </div>

        <div class="row wow fadeInUp">

          <div class="col-lg-5">
            <div class="map mb-4 mb-lg-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7301.491454981237!2d90.37662870000001!3d23.792067299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1727573837328!5m2!1sen!2sbd" frameborder="0" style="border:0; width: 100%; height: 312px;" allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="row">
              <div class="col-md-5 info">
                <i class="ion-ios-location-outline"></i>
                <p>945 East Shewrapara, Dhaka 1216</p>
              </div>
              <div class="col-md-3 info">
                <i class="ion-ios-email-outline"></i>
                <p>info@softtract.com</p>
              </div>
              <div class="col-md-4 info">
                <i class="ion-ios-telephone-outline"></i>
                <p>+880 1880580217</p>
              </div>
            </div>

            <div class="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-row">
                  <div class="form-group col-lg-6">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group col-lg-6">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>
                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section><!-- #contact -->

  </main>

  <!--==========================
    Footer
  ============================-->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-info">
            <h3>Softtract</h3>
            <p>
              At Softtract, we provide innovative ERP, CRM, Chatbot, Website Development, and AWS solutions designed to streamline operations and drive business growth. We empower businesses to enhance efficiency, engage customers, and scale confidently with cutting-edge technology.
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#intro">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/privacy">Terms of service</a></li>
              <li><a href="/privacy">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              945 East Shewrapara,<br>
              Dhaka 1216<br>
              Bangladesh <br>
              <strong>Phone:</strong> +880 1880580217<br>
              <strong>Email:</strong> info@softtract.com<br>
            </p>

            <div class="social-links">
              <!-- <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> -->
              <!-- <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> -->
              <!-- <a href="#" class="instagram"><i class="fa fa-instagram"></i></a> -->
              <a  href="mailto:info@softtract.com" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="https://www.linkedin.com/company/softtract" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Stay updated with the latest news and insights from Softtract. Subscribe for exclusive updates on our services and innovations.</p>
            <form action="" method="post">
              <input type="email" name="email" placeholder="Enter your email"><input type="submit" value="Subscribe">
            </form>
          </div>
          

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        Copyright &copy; 2024 <strong>Softtract</strong>. All Rights Reserved
      </div>
      <!-- <div class="credits"> 
        Designed by <b>Softtract</b></a>
      </div> -->
    </div>
  </footer><!-- #footer -->

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  <!-- Uncomment below i you want to use a preloader -->
  <!-- <div id="preloader"></div> -->

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/mobile-nav/mobile-nav.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/counterup/counterup.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/isotope/isotope.pkgd.min.js"></script>
  <script src="lib/lightbox/js/lightbox.min.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="contactform/contactform.js"></script>

  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>

</body>
</html>