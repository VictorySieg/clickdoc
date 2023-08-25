import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {

     //   Get the physician's name from the profile section   
     public get physicianName () {
        return $('[class="text-wrap header__content--title"]')
    }

    //  Get the physician's street and house number 
    public get street () {
        return $('[data-automation="Address - Street House"]')
    }

    // Get the physician's city
    public get city () {
        return $('[data-automation="Address - Postal city code"]')
    }

    //  Get the openimg time in the afternoon
    public get startTimeAfternoon () {
        return $('(//div[@class="text-day-hours-container__items current-date ng-star-inserted"] //div[@class="text-day-hour__text-startTime"])[2]')
    }
    
     //Get the closing time in the afternoon
    public get endTimeAfternoon () {
        return $('(//div[@class="text-day-hours-container__items current-date ng-star-inserted"] //div[@class="text-day-hour__text-endTime"])[2]')
    }
    
     //Get the opening time in the morning
    public get startTimeBeforenoon () {
        return $('(//div[@class="text-day-hours-container__items current-date ng-star-inserted"] //div[@class="text-day-hour__text-startTime"])[1]')
    }
    
     // Get the closing time in the morning
    public get endTimeBeforenoon () {
        return $('(//div[@class="text-day-hours-container__items current-date ng-star-inserted"] //div[@class="text-day-hour__text-endTime"])[1]')
    }
    // Get the current day 
public get currentDay () {
        return $('[class="text-day__item--text current-date"]')
    }

}

export default new SecurePage();
