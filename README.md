# Colorado Feline Rescue

Colorado Feline Rescue has some adorable kitties that are up for adoption! Come check them out and see if we have what your looking for.  If you see someone you love go ahead and adopt!

### Setup
----
This page takes a db.json file, so be sure to run your json-server:
![Json-server watch command](<Screenshot 2023-11-16 at 10.06.34 AM.png>)

If running correctly you should see the following resources in your terminal:

http://localhost:3000/cats

Now, go ahead and open the `index.html` file in your browser to run the application.

## Description
----
As a user, I want to:
1. See all 10 available cats on cards when the page first loads. 
![Webpage on load](<Screenshot 2023-11-14 at 5.34.18 PM.png>)
2. There should be 3 dropdowns under the header tht allows the user to make preferences.
  - The first dropdown allows users to change whether they are looking for kittens, adult cats, or senior cats.
  - The second dropdown should allow users to change between male or female cats.
  - The third dropdown allows users to search for companion cats or working cats.
    - All three dropdown's should work together, so a user can look for a female kitten, or a working senior, or a male adult companion. Any combination of the three dropdowns should show only the cats that fit those preferences.
    - If there isn't a cat that matches the selected preferences, an alert will pop-up to ask the user to make a different selection.

3. Each of the cat cards should feature the cat's name, a photo, their age, breed, and gender. There should also be two buttons.
  - One button is for donations. When a user clicks on the button they are donating $10 toward the care of that cat.
  - The other button is for adoptions. If a user sees a cat that they would like to adopt, they can click that button.
    - After the click, a pop up will congratulate the user for adopting that cat.
    - Once the pop-up is closed the user will see that cat has been removed from the page, plus an extra surprise.

![Spud card example](<Screenshot 2023-11-16 at 11.16.04 AM.png>)
 
4. Finally, as you look through the cats on the page, if you mouseover the image of a cat, a modal will appear.
  - The modal will say the cat's name, age, breed, gender, companion status, and a description of the cat's personality. That way the user will be able to make an educated decision on whether the cat is a good fit for their home and family.
  - To close back out of the modal, a user just needs to click anywhere outside the modal.

![Modal example](<Screenshot 2023-11-16 at 11.09.58 AM.png>)

### Resources
----
Our `db.json` file was created using images form TheCatAPI

- https://api.thecatapi.com/v1/images/search?limit=10
- https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME

 ### Contributors: <br>
 Anne Hastings <br>
 Ryland Sherman

### Original Concept Design
----
Webpage
![hand-drawn concept](<Screenshot 2023-11-16 at 9.57.51 AM.png>)
Modal
 ![modal concept](<Screenshot 2023-11-16 at 9.56.53 AM.png>)

