import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import ClickdocPage from '../pageobjects/clickdoc.page'
import SecurePage from '../pageobjects/secure.page'

describe('Physician informations', () => {

    it('Verify the name and address of the physician', async() => {
    
    await ClickdocPage.open()

    browser.maximizeWindow()
      
    await ClickdocPage.cookie.click()
    
    await ClickdocPage.inputPhysicianName.setValue('Peter Test')

    await ClickdocPage.physicianNameDDM.waitForExist()
    await ClickdocPage.physicianNameDDM.click()
    
    await expect(SecurePage.physicianName).toBeExisting()
    await expect(SecurePage.physicianName).toHaveTextContaining('Dr. Peter Test')

    await expect(SecurePage.street).toHaveTextContaining('Blücherstraße 10')
    await expect(SecurePage.city).toHaveTextContaining('Neuwied') 
})

   
    it('Verify current day start and end time of morning and afternoon', async() => {

    const verifyOpenningHours = async function (day: number) {
    const currentDayHours = {startTimeBeforenoon: '09:00 Uhr', endTimeBeforenoon: '12:00 Uhr',startTimeAfternoon: '14:00 Uhr', endTimeAfternoon: '18:00 Uhr'}

    if(day === 3) {

    currentDayHours.endTimeBeforenoon = '14:00 Uhr'

    }else{
    await expect(SecurePage.startTimeAfternoon).toHaveTextContaining(currentDayHours.startTimeAfternoon)
    await expect(SecurePage.endTimeAfternoon).toHaveTextContaining(currentDayHours.endTimeAfternoon)
    }
    await expect(SecurePage.startTimeBeforenoon).toHaveTextContaining(currentDayHours.startTimeBeforenoon)
    await expect(SecurePage.endTimeBeforenoon).toHaveTextContaining(currentDayHours.endTimeBeforenoon)
}
 await verifyOpenningHours(new Date().getDay());
})


 it('Verify the current day for the opening hours from contact section.', async() => {
 const verifyCurrentDay = async function (day: number) {
    if (!(day === 0 || day === 6)) {
        const days = { 1:'Mo.', 2:'Di.', 3:'Mi.', 4:'Do.', 5:'Fr.'}
        await expect(SecurePage.currentDay).toHaveTextContaining(days[day]);
    }
 }

 await verifyCurrentDay(new Date().getDay());
 
})
})