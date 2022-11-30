# Plan

1. Database Setup

Add two tables

| book_clubs |         |
| ---------- | ------- |
| name       | varchar |

| members      |                          |
| ------------ | ------------------------ |
| name         | varchar                  |
| contact_info | varchar                  |
| club_id      | foreign key (book_clubs) |

-   Add test data to workshops / participants
-   Add RLS so that only authenticated users can do anything with the data (select, update, delete, create)
    -   CLUBS => enable read for all users
    -   MEMBERS =>
        -   enable read for all users
        -   insert authenticated only
        -   delete authenticated only

2. (landing page) Book Clubs page

    - getBookClubs function (fetch all of the book clubs AND their members)
    - render function that displays the clubs
    - loop throught clubs and display

3. Create Page (separate page!)

    - HTML -> form elements with inputs for name, contact, placeholder `<select>` for bookclubs
    - get our clubs (`getBookClubs`) and dynamically add `<option>` to select
    - Add createMember function to fetch-utils
    - add event for the form submit, grabbing the form data and sending it to supabase (calling createMember)

4. Delete Member (on books page)
    - add deleteMember(id) in fetch-utils
    - make member element clickable & delete on click
