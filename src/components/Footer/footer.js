import React from "react";

function Footer() {
  return (
    <footer class="footer_part">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-sm-6 col-lg-2">
                <div class="single_footer_part">
                    <h4> Categories</h4>
                    <ul class="list-unstyled">
                        <li><a href="#">Male</a></li>
                        <li><a href="#">Female</a></li>
                        <li><a href="#">Shoes</a></li>

                    </ul>
                </div>
            </div>
            <div class="col-sm-6 col-lg-2">
                <div class="single_footer_part">
                    <h4>YSTORE</h4>
                    <ul class="list-unstyled">
                        <li><a href="">About</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="single_footer_part">
                    <h4>Address</h4>
                    <ul class="list-unstyled">
                        <li><a href="#">MD</a></li>
                        <li><a href="#">+798828810</a></li>
                        <li><span><a href="">email@gmail.com</a></span></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="single_footer_part">
                    <h4>Newsletter</h4>
                    <div id="mc_embed_signup">
                        <form target="_blank" action="" method="get" class="subscribe_form relative mail_part">
                            <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                class="placeholder hide-on-focus"/>
                            <button type="submit" name="submit" id="newsletter-submit"
                                class="email_icon newsletter-submit button-contactForm">subscribe</button>
                            <div class="mt-10 info"></div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</footer>
  );
}

export default Footer;