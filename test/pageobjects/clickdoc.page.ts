import { $ } from '@wdio/globals'
import Page from './page';

class ClickdocPage extends Page{
    /**
     * define selectors using getter methods
     */
    public get cookie () {
        return $('//button[@class="consent-button agree-necessary-cookie"]')
    }

    public get inputPhysicianName () {
        return $('[placeholder="Fachbereich, Name des Arztes, Praxis oder Einrichtung"]')
    }

    public get physicianNameDDM () {
        return $('//span[text()=" Neuwied "]')
    }
   
 
 
    public open () {
        return super.open('')
    }

}
export default new ClickdocPage()