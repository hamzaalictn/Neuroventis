package com.neuroventis.helpilepsy.utilities.ui;

import com.neuroventis.helpilepsy.pages.*;

public class Pages {
    private HomePage homePage;
    private LoginPage loginPage;
    private WelcomePage welcomepage;
    private ManageSeizurePage manageSeizurePage;

    public Pages() {
        this.homePage = new HomePage();
        this.loginPage = new LoginPage();
        this.welcomepage = new WelcomePage();
        this.manageSeizurePage = new ManageSeizurePage();

    }

    public HomePage homePage() {
        return homePage;
    }
    public LoginPage loginPage() {
        return loginPage;
    }
    public WelcomePage welcomePage(){
        return welcomepage;
    }
    public ManageSeizurePage manageSeizurePage(){
        return manageSeizurePage;
    }
}

/*
    WelcomePage welcomepage = new WelcomePage();
    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();
    ManageSeizurePage manageSeizurePage = new ManageSeizurePage();

*/


