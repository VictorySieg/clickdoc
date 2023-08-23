import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
 
    public get physicianName () {
        return $('//h1[text()="Dr. Peter Test"]')
    }

    public get street () {
        return $('//p[text()=" Blücherstraße 10 "]')
    }

 public get city () {
        return $('//p[text()=" 56564 Neuwied "]')
    }
    public get startTimeAfternoon () {
        return $('(//div[@class="text-day-hour__item-container current-date"] //div[@class="text-day-hour__text-startTime"])[2]')
    }
    

public get endTimeAfternoon () {
        return $('(//div[@class="text-day-hour__item-container current-date"] //div[@class="text-day-hour__text-endTime"])[2]')
    }

public get startTimeBeforenoon () {
        return $('(//div[@class="text-day-hour__item-container current-date"] //div[@class="text-day-hour__text-startTime"])[1]')
    }

    public get endTimeBeforenoon () {
        return $('(//div[@class="text-day-hour__item-container current-date"] //div[@class="text-day-hour__text-endTime"])[1]')
    }
    
public get currentDay () {
        return $('[class="text-day__item--text current-date"]')
    }

}

export default new SecurePage();
