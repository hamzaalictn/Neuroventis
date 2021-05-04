package com.neuroventis.helpilepsy.utilities.ui;

import com.neuroventis.helpilepsy.pages.HomePage;
import com.neuroventis.helpilepsy.pages.TutorialPage;

public class Pages {
    private HomePage homePage;
    private TutorialPage loginPage;

    public Pages() {
        this.homePage = new HomePage();
        this.loginPage = new TutorialPage();
    }

    public HomePage homePage() {
        return homePage;
    }

    public TutorialPage loginPage() {
        return loginPage;
    }
}



