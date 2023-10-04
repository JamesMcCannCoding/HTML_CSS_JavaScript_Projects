/*This section is for the progress bar and buttons*/
/*Each button is assigned a variable. The function then tells the DOM that on click the style width gets changed to a value to fills each part of the progress bar*/
var nextadd = document.getElementById("nextadd");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");
var next4 = document.getElementById("next4");

nextadd.onclick = function(){
    progress.style.width = "60px";
}
next1.onclick = function(){
    progress.style.width = "130px";
}
next2.onclick = function(){
    progress.style.width = "200px";
}
next3.onclick = function(){
    progress.style.width = "275px";
}
next4.onclick = function(){
    progress.style.width = "360px";
}
/*This function is used to create a sticky progress bar. When the user scrolls the progress bar and the header will stick to the top of their screen and appear to follow them. 
This is useful since the user can see their progress at all times. The function uses jQuery to select the header from the html document. It then uses "sticky" from CSS which has
been set to "fixed" so that all items in the header will stay when the window scroll on the Y axis becomes a value greater than 0.*/
window.addEventListener("scroll", function(){
    var slide = document.querySelector("header");
    slide.classList.toggle("sticky", window.scrollY > 0);
})

/* This function is used to hide or show questions in the form. The questions are hiddin or shown based on the users input (yes or no). 
A radio button is used to obtain a boolean value (true/false) that will then tell the css to block the styling for this element which is "display: none;" 
This function is used on the "Is this property an apartment" question.*/
function showHideApartment(){
    var checkbox = document.getElementById("chkYes");
    var hiddeninputs = document.getElementsByClassName("hidden");

    for(var i = 0; i != hiddeninputs.length; i++){
        if(checkbox.checked){
            hiddeninputs[i].style.display = "block";
        }
        else{
            hiddeninputs[i].style.display = "none";
        }
    }
}
/*This function is used on the "Is this person born in Australia?" question in part 2.*/
function showHideBornAustralia(){
    var born = document.getElementById("checkYes");
    var hiddeninputs2 = document.getElementsByClassName("hidden2");

    for(var i = 0; i != hiddeninputs2.length; i++){
        if(born.checked){
            hiddeninputs2[i].style.display = "none";
        }
        else{
            hiddeninputs2[i].style.display = "block";
        }
    }
}
/*This function is used on the "Does this property have internet access?" question in part 3.*/
function showHideInternetAccess(){
    var internet = document.getElementById("no");
    var hiddeninputs3 = document.getElementsByClassName("hidden3");

    for(var i = 0; i != hiddeninputs3.length; i++){
        if(internet.checked){
            hiddeninputs3[i].style.display = "none";
        }
        else{
            hiddeninputs3[i].style.display = "block";
        }
    }
}
/*This function is used on the "Are there any EV's garaged in this property?" question in part 3.*/
function showHideEvGaraged(){
    var ev = document.getElementById("evNo");
    var hiddeninputs4 = document.getElementsByClassName("hidden4");

    for(var i = 0; i != hiddeninputs4.length; i++){
        if(ev.checked){
            hiddeninputs4[i].style.display = "none";
        }
        else{
            hiddeninputs4[i].style.display = "block";
        }
    }
}
/*This function is used on the "Are there any pets living in this dwelling?" question in part 3.*/
function showHidePets(){
    var pets = document.getElementById("petsNo");
    var hiddeninputs5 = document.getElementsByClassName("hidden5");

    for(var i = 0; i != hiddeninputs5.length; i++){
        if(pets.checked){
            hiddeninputs5[i].style.display = "none";
        }
        else{
            hiddeninputs5[i].style.display = "block";
        }
    }
}
/*This function is used on the "Would you like to leave feedback?" question in part 4.*/
function showHideFeedback(){
    var feedback = document.getElementById("feedbackNo");
    var hiddeninputs6 = document.getElementsByClassName("hidden6");

    for(var i = 0; i != hiddeninputs6.length; i++){
        if(feedback.checked){
            hiddeninputs6[i].style.display = "none";
        }
        else{
            hiddeninputs6[i].style.display = "block";
        }
    }
}
/*This next section of hide/ show functions are for the help button.
This function is used to show help on the "street number" question in address of the dwelling.*/
function showHideHelpStreetNumber(){
    var helpStreetNumber = document.getElementById("HelpStreetNumberYes");
    var hiddeninputsHelpStreetNumber = document.getElementsByClassName("hiddenHelpStreetNumber");

    for(var i = 0; i != hiddeninputsHelpStreetNumber.length; i++){
        if(helpStreetNumber.checked){
            hiddeninputsHelpStreetNumber[i].style.display = "block";
        }
        else{
            hiddeninputsHelpStreetNumber[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "street name" question in address of the dwelling.*/
function showHideHelpStreetName(){
    var helpStreetName = document.getElementById("HelpStreetNameYes");
    var hiddeninputsHelpStreetName = document.getElementsByClassName("hiddenHelpStreetName");

    for(var i = 0; i != hiddeninputsHelpStreetName.length; i++){
        if(helpStreetName.checked){
            hiddeninputsHelpStreetName[i].style.display = "block";
        }
        else{
            hiddeninputsHelpStreetName[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Is this an apartment" question in address of the dwelling.*/
function showHideHelpApartment(){
    var helpApartment = document.getElementById("HelpApartmentYes");
    var hiddeninputsHelpApartment = document.getElementsByClassName("hiddenHelpApartment");

    for(var i = 0; i != hiddeninputsHelpApartment.length; i++){
        if(helpApartment.checked){
            hiddeninputsHelpApartment[i].style.display = "block";
        }
        else{
            hiddeninputsHelpApartment[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Apartment number (Yes)" question in address of the dwelling.*/
function showHideHelpApartmentNumber(){
    var helpApartmentNumber = document.getElementById("HelpApartmentNumberYes");
    var hiddeninputsHelpApartmentNumber = document.getElementsByClassName("hiddenHelpApartmentNumber");

    for(var i = 0; i != hiddeninputsHelpApartmentNumber.length; i++){
        if(helpApartmentNumber.checked){
            hiddeninputsHelpApartmentNumber[i].style.display = "block";
        }
        else{
            hiddeninputsHelpApartmentNumber[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Suburb" question in address of the dwelling.*/
function showHideHelpSuburb(){
    var helpSuburb = document.getElementById("HelpSuburbYes");
    var hiddeninputsHelpSuburb = document.getElementsByClassName("hiddenHelpSuburb");

    for(var i = 0; i != hiddeninputsHelpSuburb.length; i++){
        if(helpSuburb.checked){
            hiddeninputsHelpSuburb[i].style.display = "block";
        }
        else{
            hiddeninputsHelpSuburb[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "City" question in address of the dwelling.*/
function showHideHelpCity(){
    var helpCity = document.getElementById("HelpCityYes");
    var hiddeninputsHelpCity = document.getElementsByClassName("hiddenHelpCity");

    for(var i = 0; i != hiddeninputsHelpCity.length; i++){
        if(helpCity.checked){
            hiddeninputsHelpCity[i].style.display = "block";
        }
        else{
            hiddeninputsHelpCity[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Postcode" question in address of the dwelling.*/
function showHideHelpPostcode(){
    var helpPostcode = document.getElementById("HelpPostcodeYes");
    var hiddeninputsHelpPostcode = document.getElementsByClassName("hiddenHelpPostcode");

    for(var i = 0; i != hiddeninputsHelpPostcode.length; i++){
        if(helpPostcode.checked){
            hiddeninputsHelpPostcode[i].style.display = "block";
        }
        else{
            hiddeninputsHelpPostcode[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "State" question in address of the dwelling.*/
function showHideHelpState(){
    var helpState = document.getElementById("HelpStateYes");
    var hiddeninputsHelpState = document.getElementsByClassName("hiddenHelpState");

    for(var i = 0; i != hiddeninputsHelpState.length; i++){
        if(helpState.checked){
            hiddeninputsHelpState[i].style.display = "block";
        }
        else{
            hiddeninputsHelpState[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "How many people are in the dwelling" question in Part 1.*/
function showHideHelpPeople(){
    var helpPeople = document.getElementById("HelpPeopleYes");
    var hiddeninputsHelpPeople = document.getElementsByClassName("hiddenHelpPeople");

    for(var i = 0; i != hiddeninputsHelpPeople.length; i++){
        if(helpPeople.checked){
            hiddeninputsHelpPeople[i].style.display = "block";
        }
        else{
            hiddeninputsHelpPeople[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Given name" question in Part 1.*/
function showHideHelpGivenName(){
    var helpGivenName = document.getElementById("HelpGivenNameYes");
    var hiddeninputsHelpGivenName = document.getElementsByClassName("hiddenHelpGivenName");

    for(var i = 0; i != hiddeninputsHelpGivenName.length; i++){
        if(helpGivenName.checked){
            hiddeninputsHelpGivenName[i].style.display = "block";
        }
        else{
            hiddeninputsHelpGivenName[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Family name" question in Part 1.*/
function showHideHelpFamilyName(){
    var helpFamilyName = document.getElementById("HelpFamilyNameYes");
    var hiddeninputsHelpFamilyName = document.getElementsByClassName("hiddenHelpFamilyName");

    for(var i = 0; i != hiddeninputsHelpFamilyName.length; i++){
        if(helpFamilyName.checked){
            hiddeninputsHelpFamilyName[i].style.display = "block";
        }
        else{
            hiddeninputsHelpFamilyName[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Gender" question in Part 1.*/
function showHideHelpGender(){
    var helpGender = document.getElementById("HelpGenderYes");
    var hiddeninputsHelpGender = document.getElementsByClassName("hiddenHelpGender");

    for(var i = 0; i != hiddeninputsHelpGender.length; i++){
        if(helpGender.checked){
            hiddeninputsHelpGender[i].style.display = "block";
        }
        else{
            hiddeninputsHelpGender[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Date of Birth" question in Part 1.*/
function showHideHelpDoB(){
    var helpDoB = document.getElementById("HelpDoBYes");
    var hiddeninputsHelpDoB = document.getElementsByClassName("hiddenHelpDoB");

    for(var i = 0; i != hiddeninputsHelpDoB.length; i++){
        if(helpDoB.checked){
            hiddeninputsHelpDoB[i].style.display = "block";
        }
        else{
            hiddeninputsHelpDoB[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Was this person born in Australia?" question in Part 1.*/
function showHideHelpBornAustralia(){
    var helpBornAustralia = document.getElementById("HelpBornAustraliaYes");
    var hiddeninputsHelpBornAustralia = document.getElementsByClassName("hiddenHelpBornAustralia");

    for(var i = 0; i != hiddeninputsHelpBornAustralia.length; i++){
        if(helpBornAustralia.checked){
            hiddeninputsHelpBornAustralia[i].style.display = "block";
        }
        else{
            hiddeninputsHelpBornAustralia[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What country was this person born in?" question in Part 1.*/
function showHideHelpBornCountry(){
    var helpBornCountry = document.getElementById("HelpBornCountryYes");
    var hiddeninputsHelpBornCountry = document.getElementsByClassName("hiddenHelpBornCountry");

    for(var i = 0; i != hiddeninputsHelpBornCountry.length; i++){
        if(helpBornCountry.checked){
            hiddeninputsHelpBornCountry[i].style.display = "block";
        }
        else{
            hiddeninputsHelpBornCountry[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What date did you arrive in Australia?" question in Part 1.*/
function showHideHelpArrival(){
    var helpArrival = document.getElementById("HelpArrivalYes");
    var hiddeninputsHelpArrival = document.getElementsByClassName("hiddenHelpArrival");

    for(var i = 0; i != hiddeninputsHelpArrival.length; i++){
        if(helpArrival.checked){
            hiddeninputsHelpArrival[i].style.display = "block";
        }
        else{
            hiddeninputsHelpArrival[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Is this person an Australian citizen?" question in Part 1.*/
function showHideHelpCitizen(){
    var helpCitizen = document.getElementById("HelpCitizenYes");
    var hiddeninputsHelpCitizen = document.getElementsByClassName("hiddenHelpCitizen");

    for(var i = 0; i != hiddeninputsHelpCitizen.length; i++){
        if(helpCitizen.checked){
            hiddeninputsHelpCitizen[i].style.display = "block";
        }
        else{
            hiddeninputsHelpCitizen[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Does this person speak another language other than English?" question in Part 1.*/
function showHideHelpLanguage(){
    var helpLanguage = document.getElementById("HelpLanguageYes");
    var hiddeninputsHelpLanguage = document.getElementsByClassName("hiddenHelpLanguage");

    for(var i = 0; i != hiddeninputsHelpLanguage.length; i++){
        if(helpLanguage.checked){
            hiddeninputsHelpLanguage[i].style.display = "block";
        }
        else{
            hiddeninputsHelpLanguage[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Does this person speak English well?" question in Part 1.*/
function showHideHelpEnglishWell(){
    var helpEnglishWell = document.getElementById("HelpEnglishWellYes");
    var hiddeninputsHelpEnglishWell = document.getElementsByClassName("hiddenHelpEnglishWell");

    for(var i = 0; i != hiddeninputsHelpEnglishWell.length; i++){
        if(helpEnglishWell.checked){
            hiddeninputsHelpEnglishWell[i].style.display = "block";
        }
        else{
            hiddeninputsHelpEnglishWell[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What is the highest year of secondary school this person has completed?" question in Part 1.*/
function showHideHelpSchool(){
    var helpSchool = document.getElementById("HelpSchoolYes");
    var hiddeninputsHelpSchool = document.getElementsByClassName("hiddenHelpSchool");

    for(var i = 0; i != hiddeninputsHelpSchool.length; i++){
        if(helpSchool.checked){
            hiddeninputsHelpSchool[i].style.display = "block";
        }
        else{
            hiddeninputsHelpSchool[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What is the highest qualification this person has reveived?" question in Part 1.*/
function showHideHelpQualification(){
    var helpQualification = document.getElementById("HelpQualificationYes");
    var hiddeninputsHelpQualification = document.getElementsByClassName("hiddenHelpQualification");

    for(var i = 0; i != hiddeninputsHelpQualification.length; i++){
        if(helpQualification.checked){
            hiddeninputsHelpQualification[i].style.display = "block";
        }
        else{
            hiddeninputsHelpQualification[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What field of study is this qualification in?" question in Part 1.*/
function showHideHelpField(){
    var helpField = document.getElementById("HelpFieldYes");
    var hiddeninputsHelpField = document.getElementsByClassName("hiddenHelpField");

    for(var i = 0; i != hiddeninputsHelpField.length; i++){
        if(helpField.checked){
            hiddeninputsHelpField[i].style.display = "block";
        }
        else{
            hiddeninputsHelpField[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What type of dwelling is this?" question in Part 2.*/
function showHideHelpDwellingType(){
    var helpDwellingType = document.getElementById("HelpDwellingTypeYes");
    var hiddeninputsHelpDwellingType = document.getElementsByClassName("hiddenHelpDwellingType");

    for(var i = 0; i != hiddeninputsHelpDwellingType.length; i++){
        if(helpDwellingType.checked){
            hiddeninputsHelpDwellingType[i].style.display = "block";
        }
        else{
            hiddeninputsHelpDwellingType[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What is the financial situation with this dwelling?" question in Part 2.*/
function showHideHelpDwellingFinance(){
    var helpDwellingFinance = document.getElementById("HelpDwellingFinanceYes");
    var hiddeninputsHelpDwellingFinance = document.getElementsByClassName("hiddenHelpDwellingFinance");

    for(var i = 0; i != hiddeninputsHelpDwellingFinance.length; i++){
        if(helpDwellingFinance.checked){
            hiddeninputsHelpDwellingFinance[i].style.display = "block";
        }
        else{
            hiddeninputsHelpDwellingFinance[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What is the primary source of energy for this dwelling?" question in Part 2.*/
function showHideEnergySource(){
    var helpEnergySource = document.getElementById("HelpEnergySourceYes");
    var hiddeninputsHelpEnergySource = document.getElementsByClassName("hiddenHelpEnergySource");

    for(var i = 0; i != hiddeninputsHelpEnergySource.length; i++){
        if(helpEnergySource.checked){
            hiddeninputsHelpEnergySource[i].style.display = "block";
        }
        else{
            hiddeninputsHelpEnergySource[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Does this dwelling have internet access?" question in Part 2.*/
function showHideInternetAccessHelp(){
    var helpInternetAccess = document.getElementById("HelpInternetAccessYes");
    var hiddeninputsHelpInternetAccess = document.getElementsByClassName("hiddenHelpInternetAccess");

    for(var i = 0; i != hiddeninputsHelpInternetAccess.length; i++){
        if(helpInternetAccess.checked){
            hiddeninputsHelpInternetAccess[i].style.display = "block";
        }
        else{
            hiddeninputsHelpInternetAccess[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What type of internet access does this dwelling have?" question in Part 2.*/
function showHideHowInternetAccess(){
    var helpHowInternetAccess = document.getElementById("HelpHowInternetAccessYes");
    var hiddeninputsHelpHowInternetAccess = document.getElementsByClassName("HelpHowInternetAccessYes");

    for(var i = 0; i != hiddeninputsHelpHowInternetAccess.length; i++){
        if(helpHowInternetAccess.checked){
            hiddeninputsHelpHowInternetAccess[i].style.display = "block";
        }
        else{
            hiddeninputsHelpHowInternetAccess[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What is the average internet download (GB) per month?" question in Part 2.*/
function showHideDownload(){
    var helpDownload = document.getElementById("HelpDownloadYes");
    var hiddeninputsHelpDownload = document.getElementsByClassName("hiddenHelpDownload");

    for(var i = 0; i != hiddeninputsHelpDownload.length; i++){
        if(helpDownload.checked){
            hiddeninputsHelpDownload[i].style.display = "block";
        }
        else{
            hiddeninputsHelpDownload[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "How many bedrooms does this dwelling have?" question in Part 2.*/
function showHideBedroom(){
    var helpBedroom = document.getElementById("HelpBedroomYes");
    var hiddeninputsHelpBedroom = document.getElementsByClassName("hiddenHelpBedroom");

    for(var i = 0; i != hiddeninputsHelpBedroom.length; i++){
        if(helpBedroom.checked){
            hiddeninputsHelpBedroom[i].style.display = "block";
        }
        else{
            hiddeninputsHelpBedroom[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Does this dwelling have any EVs garaged here?" question in Part 2.*/
function showHideEv(){
    var helpEv = document.getElementById("HelpEvYes");
    var hiddeninputsHelpEv = document.getElementsByClassName("hiddenHelpEv");

    for(var i = 0; i != hiddeninputsHelpEv.length; i++){
        if(helpEv.checked){
            hiddeninputsHelpEv[i].style.display = "block";
        }
        else{
            hiddeninputsHelpEv[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "What type of EVs are garaged at this dwelling?" question in Part 2.*/
function showHideEvType(){
    var helpEvType = document.getElementById("HelpEvTypeYes");
    var hiddeninputsHelpEvType = document.getElementsByClassName("hiddenHelpEvTypeYes");

    for(var i = 0; i != hiddeninputsHelpEvType.length; i++){
        if(helpEvType.checked){
            hiddeninputsHelpEvType[i].style.display = "block";
        }
        else{
            hiddeninputsHelpEvType[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Part 3 - Animals" section*/
function showHideHelpAnimals(){
    var helpAnimals = document.getElementById("HelpAnimalsYes");
    var hiddeninputsHelpAnimals = document.getElementsByClassName("hiddenHelpAnimals");

    for(var i = 0; i != hiddeninputsHelpAnimals.length; i++){
        if(helpAnimals.checked){
            hiddeninputsHelpAnimals[i].style.display = "block";
        }
        else{
            hiddeninputsHelpAnimals[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Part 3 - Animals" section*/
function showHideHelpAnimalsNumber(){
    var helpAnimalsNumber = document.getElementById("HelpAnimalsNumberYes");
    var hiddeninputsHelpAnimalsNumber = document.getElementsByClassName("hiddenHelpAnimalsNumber");

    for(var i = 0; i != hiddeninputsHelpAnimalsNumber.length; i++){
        if(helpAnimalsNumber.checked){
            hiddeninputsHelpAnimalsNumber[i].style.display = "block";
        }
        else{
            hiddeninputsHelpAnimalsNumber[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Part 3 - Animals" section*/
function showHideHelpAnimalsType(){
    var helpAnimalsType = document.getElementById("HelpAnimalsTypeYes");
    var hiddeninputsHelpAnimalsType = document.getElementsByClassName("hiddenHelpAnimalsType");

    for(var i = 0; i != hiddeninputsHelpAnimalsType.length; i++){
        if(helpAnimalsType.checked){
            hiddeninputsHelpAnimalsType[i].style.display = "block";
        }
        else{
            hiddeninputsHelpAnimalsType[i].style.display = "none";
        }
    }
}
/*This function is used to show help on the "Part 3 - Animals" section*/
function showHideHelpAnimalsNumberType(){
    var helpAnimalsNumberType = document.getElementById("HelpAnimalsNumberTypeYes");
    var hiddeninputsHelpAnimalsNumberType = document.getElementsByClassName("hiddenHelpAnimalsNumberType");

    for(var i = 0; i != hiddeninputsHelpAnimalsNumberType.length; i++){
        if(helpAnimalsNumberType.checked){
            hiddeninputsHelpAnimalsNumberType[i].style.display = "block";
        }
        else{
            hiddeninputsHelpAnimalsNumberType[i].style.display = "none";
        }
    }
}
/*This function is used to show all help on the "Part 4 - Feedback" section*/
function showHideHelp4(){
    var helpP4 = document.getElementById("Help4Yes");
    var hiddeninputsHelpP4 = document.getElementsByClassName("hiddenHelpP4");

    for(var i = 0; i != hiddeninputsHelpP4.length; i++){
        if(helpP4.checked){
            hiddeninputsHelpP4[i].style.display = "block";
        }
        else{
            hiddeninputsHelpP4[i].style.display = "none";
        }
    }
}
/*This next section is validation. These are a series of functions that validate the radio and select elements. The function returns a false if the variable is not checked. This is used to 
help the person who is filling out the form not to forgetto answer a question. The function uses jQuery to find the name of the element in the form section which it then becomes assigned as a variable "x".
If the "X" checked = true then valid = true and the for loop will break. Or else if "X" is not checked it will return "false" and the person will not be able to continue to the next part of the form.
/*This function is used to validate the yes/no radio question "Is this property an apartment?" in the address section of the form.*/
function validate(){
    var valid = false;
    var x = document.form.Apartment;

    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            valid = true;
            break;
        }
        else{
            return false;
    }
}
}
/*This function is used to validate the yes/no radio question "Gender?" in part 1 of the form.*/
function validate(){
    var gender = document.form.Gender.value;

    if(gender==""){
        document.form.Gender.focus();
        return false;
    }
    else{
        return true;
    }
}
/*This function is slightly different from the last in that if the variable "school" is == "" (nothing) then jQuery will focus and return "false". If the user has selected an input then else will return true 
and the person can continue to fill out the form.
/*This function is used to validate the select question "What is the highest level of secondary school completed?" in part 1 of the form.*/
function validate(){
    var school = document.form.Highest_school_level_completed.value;

    if(school==""){
        document.form.Highest_school_level_completed.focus();
        return false;
    }
    else{
        return true;
    }
}
/*This function is used to validate the select question "What is the highest qualification this person has achieved?" in part 1 of the form.*/
function validate(){
    var qualification = document.form.Highest_qualification_achieved.value;

    if(qualification==""){
        document.form.Highest_qualification_achieved.focus();
        return false;
    }
    else{
        return true;
    }
}
/*This function is used to validate the select question "What type of dwelling is this?" in part 2 of the form.*/
function validate(){
    var dwellingType = document.form.Type_of_dwelling.value;

    if(dwellingType==""){
        document.form.Type_of_dwelling.focus();
        return false;
    }
    else{
        return true;
    }
}
/*This function is used to validate the select question "What is the financial situation of this dwelling?" in part 2 of the form.*/
function validate(){
    var dwellingFinance = document.form.Dwellings_financial_situation.value;

    if(dwellingFinance==""){
        document.form.Dwellings_financial_situation.focus();
        return false;
    }
    else{
        return true;
    }
}
/*This function is used to validate the select question "What is the main energy source of this dwelling?" in part 2 of the form.*/
function validate(){
    var dwellingEnergy = document.form.Dwellings_energy_source.value;

    if(dwellingEnergy==""){
        document.form.Dwellings_energy_source.focus();
        return false;
    }
    else{
        return true;
    }
}

