# MWCC Website — Client Change Instructions for Bricks Builder

> **How to use this file:** Work through each section top to bottom.
> Each step is written for your WordPress admin + Bricks Builder live site at
> `dev.mwcc.activemarketingplan.com`.
> Open WordPress Admin → follow the steps for each change.

---

## 📊 Task Breakdown by Difficulty

**🟢 EASY (6 tasks)** — ~5 min each  
Sections: 1, 3, 6, 8, 10, 14

**🟡 NORMAL (9 tasks)** — ~15–20 min each  
Sections: 2, 4, 5, 7, 11, 13, 15, 18, 19

**🔴 HARD (5 tasks)** — ~30–45 min each  
Sections: 9, 12, 16, 17, 20

> **Tip:** Start with all EASY tasks to build momentum, then tackle NORMAL, then HARD tasks.

---

## SECTION 1 — Meet The Staff Page (Make Non-Public)

**Difficulty:** 🟢 EASY

**Goal:** Hide `/meet-the-staff/` from the public until Heather's team grows.

**Steps:**

1. Go to **WordPress Admin → Pages**
2. Find "Meet The Staff" in the list
3. Click **Quick Edit** next to it
4. Change **Status** from `Published` → `Draft`
5. Click **Update**

> The page is now hidden from visitors. You can bring it back anytime by publishing again.

Also remove it from the navigation (see Section 3 below).

---

## SECTION 2 — Our Story / About Us: Add Heather

**Difficulty:** 🟡 NORMAL

**Goal:** Add Heather to the "Our Story" section on `/aboutus/` AND as Executive Team on `/boardofdirectors/`.

### Part A — Add Heather on the About Us page

1. Go to **WordPress Admin → Pages**
2. Find "About Us" → click **Edit with Bricks**
3. Scroll to the "Our Story" or team/leadership section on the page
4. Click on the text block or card that shows staff/leadership
5. Add a line/card for Heather:
   - **Name:** Heather [last name]
   - **Title:** Executive Director (or whatever her title is)
   - **Short bio:** Write 2–3 sentences about her role at MWCC
   - **Photo:** Upload her headshot via the Bricks image element
6. Click **Save** (top right in Bricks)

### Part B — Add Heather on the Board of Directors page

1. Go to **WordPress Admin → Pages**
2. Find "Board of Directors" → click **Edit with Bricks**
3. Find the "Executive Team" or Officers section at the top
4. Duplicate an existing officer card (right-click the card element → Duplicate)
5. Update the duplicated card:
   - **Name:** Heather [last name]
   - **Role/Title:** Executive Director
   - **Photo:** Upload her headshot
   - **Company:** Mountain West Chamber of Commerce
6. Click **Save**

---

## SECTION 3 — About Us Navigation Dropdown: Remove "Get Involved"

**Difficulty:** 🟢 EASY

**Goal:** The "About Us" dropdown currently shows "Get Involved" — remove it since it already has its own top-level nav item.

**Steps:**

1. Go to **WordPress Admin → Appearance → Menus**
2. Select your main navigation menu from the dropdown → click **Select**
3. Find **"About Us"** in the menu tree — click the arrow to expand it
4. Inside the About Us dropdown, find **"Get Involved"**
5. Click the arrow next to it to expand → click **Remove**
6. Click **Save Menu**

> "Get Involved" stays as its own top-level nav item — you're only removing it from the About Us sub-menu.

---

## SECTION 4 — Utah Strong: Add Monday.com + Check Utah-Based Tech

**Difficulty:** 🟡 NORMAL

**Goal:** Add Monday.com to the Project Management section. Also flag any Utah-based companies already listed.

### Add Monday.com

1. Go to **WordPress Admin → Pages**
2. Find "Utah Strong" → click **Edit with Bricks**
3. Scroll to the **"Project Management"** section/category
4. Find the list of tools there (e.g. Asana, Trello, etc.)
5. Add a new list item or card:
   - **Name:** Monday.com
   - **URL:** https://monday.com
   - **Description:** Visual project management platform for teams — plan, track, and manage any workflow.
6. Click **Save**

### Check for Utah-Based Technologies

Look through all the resource links on the Utah Strong page. If any company is Utah-based (e.g. Domo is based in American Fork, UT), add a small label like **"Utah-Based"** or a UT flag icon next to it. Ask your client to confirm which ones qualify before making this change.

---

## SECTION 5 — Supporting Chambers: Add New Chambers + Real Links

**Difficulty:** 🟡 NORMAL

**Goal:** Add 3 new chambers and give real URLs to the existing placeholder (#) links.

### Step 1 — Fix Existing Placeholder Links

1. Go to **WordPress Admin → Pages**
2. Find "Supporting Chambers" → click **Edit with Bricks**
3. Find each of these chamber cards and update their links from `#` to the real URL:

   | Chamber Name                    | Real URL                            |
   | ------------------------------- | ----------------------------------- |
   | West Jordan Chamber of Commerce | https://www.chamberwest.com/        |
   | Sandy Area Chamber of Commerce  | https://www.sandyoregonchamber.org/ |
   | Murray Area Chamber of Commerce | https://www.themurraychamber.com/   |
   | Women in Business — Utah        | https://www.wbcutah.org/            |

4. For each card: click the button/link element → update the URL in Bricks

### Step 2 — Add 3 New Chamber Cards

Duplicate an existing chamber card 3 times (right-click → Duplicate) and fill in:

**Card 1 — SoJo Chamber**

- **Name:** SoJo Chamber of Commerce
- **Region:** South Jordan, UT
- **Description:** Serving South Jordan businesses with networking, advocacy, and community growth programs.
- **URL:** https://sj-chamber.org/

**Card 2 — UPIC Chamber**

- **Name:** UPIC Chamber
- **Region:** Utah, UT
- **Description:** Supporting Utah business communities through partnerships, professional development, and local advocacy.
- **URL:** https://www.upichamber.org/

**Card 3 — Point of the Mountain Chamber** _(client is unsure — confirm before adding)_

- **Name:** Point of the Mountain Chamber
- **Region:** Point of the Mountain, UT
- **Description:** Connecting businesses at the heart of Utah's fastest-growing corridor.
- **URL:** https://thepointchamber.com/

5. Click **Save**

---

## SECTION 6 — Membership Dropdown: Remove "Sponsorship Opportunities" + Add "Sponsorships & Partnerships"

**Difficulty:** 🟢 EASY

**Goal:** Clean up the Membership menu — remove Sponsorship Opps and add a better-named item.

**Steps:**

1. Go to **WordPress Admin → Appearance → Menus**
2. Expand the **Membership** dropdown in your menu tree
3. Find **"Sponsorship Opportunities"** inside Membership → click arrow → click **Remove**
4. Now add a new link:
   - Click **Custom Links** (in the left panel)
   - **URL:** `/sponsorship/` (or whatever the Sponsorships & Partnerships page URL will be)
   - **Link Text:** Sponsorships & Partnerships
   - Click **Add to Menu**
5. Drag the new item under "Membership" in the correct position
6. Click **Save Menu**

> Note: "Sponsorships & Partnerships" may need a new page created — see Section 19 for the rename of Sponsorship Opps.

---

## SECTION 7 — Members Page: Add a Search Bar

**Difficulty:** 🟡 NORMAL

**Goal:** Add a search/filter bar at the top of `/members/` so visitors can search the member directory.

**Steps:**

1. Go to **WordPress Admin → Pages**
2. Find "Member Directory" (or "Members") → click **Edit with Bricks**
3. Click at the top of the member listing area (before the first member card)
4. Add a new **"Search"** or **"Text Input"** element from the Bricks elements panel:
   - If your theme/plugin has a Member Directory search widget, use that
   - Otherwise add a Bricks **Form** element with a single text field labeled "Search Members…"
5. Style it to match the site (primary blue border, white background)
6. If your member directory is powered by a plugin (e.g. MemberPress, Paid Memberships Pro, BuddyBoss), check the plugin's settings for a built-in search widget — it will work better than a manual form
7. Click **Save**

> **Note:** If members are managed by a plugin, check that plugin's docs for how to enable search. Tell your client what plugin is being used if you're unsure.

---

## SECTION 8 — Member Resources Dropdown: Rename "Membership Training" to "Chamber 411"

**Difficulty:** 🟢 EASY

**Steps:**

1. Go to **WordPress Admin → Appearance → Menus**
2. Expand the **"Member Resources"** dropdown
3. Find **"Membership Training"** → click the arrow to expand it
4. Change the **Navigation Label** field from `Membership Training` → `Chamber 411`
5. Click **Save Menu**

Also rename the actual page:

1. Go to **WordPress Admin → Pages**
2. Find "Membership Training" page → click **Quick Edit**
3. Change the **Title** to `Chamber 411`
4. Click **Update**

---

## SECTION 9 — Annual Report Page: Add Impact Badges + Reorder Content

**Difficulty:** 🔴 HARD

**Goal:** Show achievement badges FIRST (more powerful story), then the annual report downloads below.

### Step 1 — Create the Impact Badges Section

1. Go to **WordPress Admin → Pages**
2. Find "Annual Report" → click **Edit with Bricks**
3. Add a new section ABOVE the existing annual reports list
4. Create 3 badge-style cards (colorful, bold stat cards):

   **Badge 1**
   - Big text: **Over $50,000**
   - Sub-text: In Scholarships & Counting

   **Badge 2**
   - Big text: **Over 300 Teachers**
   - Sub-text: Awarded $200,000+

   **Badge 3**
   - Big text: **Over 1,000**
   - Sub-text: Local Heroes Honored

5. Style each badge: dark navy background (#0D3B66), bold yellow number (#F7DE32), white label text
6. Arrange them in a 3-column grid (or horizontal row)

### Step 2 — Move Annual Reports Below the Badges

The existing annual report cards (2022, 2023, 2024) should now appear BELOW the badge section. In Bricks, drag the annual reports section below the new badges section.

7. Click **Save**

---

## SECTION 10 — Member Resources Dropdown: Remove "Renew"

**Difficulty:** 🟢 EASY

**Goal:** "Renew" is already under Membership — remove it from Member Resources to avoid duplication.

**Steps:**

1. Go to **WordPress Admin → Appearance → Menus**
2. Expand the **"Member Resources"** dropdown
3. Find **"Renew"** inside it → click arrow → click **Remove**
4. Click **Save Menu**

---

## SECTION 11 — Chamber News: Remove 2022 Posts + Plan New Monthly Stories

**Difficulty:** 🟡 NORMAL

**Goal:** Clean up old/weak blog posts and create fresh, monthly news items starting January.

### Step 1 — Remove Old 2022 Stories

1. Go to **WordPress Admin → Posts** (or whatever section Chamber News posts are under — may be a Custom Post Type)
2. Filter by date: set the date filter dropdown to **2022**
3. Select all 2022 posts → Bulk Action → **Move to Trash** → Apply
4. Do the same for any 2023 posts you want to remove (review them first — keep anything good)
5. Go to **Trash** → **Empty Trash** to permanently delete

### Step 2 — Plan New Monthly News Items

Work with Heather to create one news article per month, backdated to January of this year. Suggested topics:

| Month     | Suggested Story Idea                             |
| --------- | ------------------------------------------------ |
| January   | MWCC Kicks Off 2025 — What's Coming This Year    |
| February  | Meet Our New Members This Quarter                |
| March     | Sponsorship Opportunities Open for 2025 Programs |
| April     | Teacher Appreciation Luncheon Recap              |
| May       | Knight of Heroes Gala Announcement               |
| June      | Golf Classic Registration Now Open               |
| July      | Member Spotlight: [Business Name]                |
| August    | MWCC Scholarship Recipients Announced            |
| September | Golf Classic Recap & Winners                     |
| October   | Annual Report Released                           |
| November  | Giving Back — MWCC in the Community              |
| December  | Year in Review + Thank You                       |

To backdate a post:

1. Create the post normally
2. In the Publish settings panel → click **Immediately** next to "Publish"
3. Set the date to the past date you want
4. Click **Publish**

---

## SECTION 12 — Add "Member Speaks" Page

**Difficulty:** 🔴 HARD

**Goal:** Create a new page where member testimonials or member-written content can live.

**Steps:**

1. Go to **WordPress Admin → Pages → Add New**
2. **Title:** Member Speaks
3. Click **Edit with Bricks** (or use your page builder)
4. Build a simple page layout:
   - **Hero section:** "Member Speaks" heading, tagline: _"Real stories from real members of the Mountain West Chamber"_
   - **Cards grid:** Each card = member name, business, photo, short quote/story
   - **CTA at bottom:** "Want to share your story? Contact Us → [button]"
5. For now, add 2–3 placeholder member stories using real member names from the directory
6. **Publish** the page
7. Add it to the **Member Resources** dropdown in Appearance → Menus

---

## SECTION 13 — Board of Directors: Remove 4 Members + Add Mark Dominguez

**Difficulty:** 🟡 NORMAL

**Goal:** Remove Lyla, Aaron, Megan, Crystal from the board and add Mark Dominguez.

### Remove 4 Members

1. Go to **WordPress Admin → Pages**
2. Find "Board of Directors" → click **Edit with Bricks**
3. Find and **delete** the following board member cards:
   - **Lyla Nock** (Events by Lyla)
   - **Aaron Maxfield** (Telemundo)
   - **Megan Bennett** (Edward Jones Investments)
   - **Crystal Flynn** (Eternal Estate Planning)
4. To delete: click the card element → press **Delete** or right-click → Delete

### Add Mark Dominguez

5. Duplicate an existing board member card
6. Update it with:
   - **Name:** Mark Dominguez
   - **Role:** Board Member
   - **Company:** [Ask client for his company name]
   - **Photo:** [Upload Mark's photo — ask client to provide it]
   - **Bio:** [Ask client for a short bio]
7. Click **Save**

> Also update the **"10 Board Members"** stat card to the correct new count after removing 4 and adding 1 (net: 7 board members — verify the exact number with your client).

---

## SECTION 14 — Sponsorship Page: Change Women in Business Meeting Day

**Difficulty:** 🟢 EASY

**Goal:** Update "Women in Business" meeting from its current schedule to **every 2nd Wednesday**.

**Steps:**

1. Go to **WordPress Admin → Pages**
2. Find "Sponsorship" (`/sponsorship/`) → click **Edit with Bricks**
3. Find the Women in Business section/card/text block
4. Find the current meeting day text (e.g. "every Thursday" or "monthly")
5. Change it to: **"Every 2nd Wednesday"**
6. Click **Save**

---

## SECTION 15 — Committees Page: Add a "Resident" Section

**Difficulty:** 🟡 NORMAL

**Goal:** Add a new "Residents" committee section to `/committees/`.

**Steps:**

1. Go to **WordPress Admin → Pages**
2. Find "Committees" → click **Edit with Bricks**
3. Duplicate an existing committee section/card
4. Update the duplicated section:
   - **Title:** Resident Committee
   - **Description:** A dedicated space for residents of Riverton, Herriman, and Bluffdale to engage with the Chamber — share feedback, connect with local businesses, and get involved in the community.
   - **Chair/Contact:** [Ask client who leads this committee]
5. Add it to the page alongside the other committees
6. Click **Save**

---

## SECTION 16 — Programs Navigation: Add "Volunteer" + "Residency" Pages

**Difficulty:** 🔴 HARD

**Goal:** Create two new program pages and add "Residency" at the TOP of the Programs nav dropdown.

### Step 1 — Create the Volunteer Page

1. Go to **WordPress Admin → Pages → Add New**
2. **Title:** Volunteer
3. **Slug:** `/volunteer/`
4. Edit with Bricks — build a simple page:
   - Hero: "Volunteer with MWCC" heading
   - Description of volunteer opportunities
   - A sign-up form or contact link
5. Publish

### Step 2 — Create the Residency Page

1. Go to **WordPress Admin → Pages → Add New**
2. **Title:** Residency
3. **Slug:** `/residency/`
4. Edit with Bricks — build a page explaining the residency program
5. Publish

### Step 3 — Add Both to the Programs Menu

1. Go to **WordPress Admin → Appearance → Menus**
2. Expand the **"Programs"** dropdown
3. Add "Residency" as a Custom Link (`/residency/`) → drag it to the **very top** of the Programs dropdown
4. Add "Volunteer" as a Custom Link (`/volunteer/`) → place it below Residency
5. Click **Save Menu**

---

## SECTION 17 — Programs: Combine Golf Pages + Update Button to 2026 + "See You Next Year" for Past Events

**Difficulty:** 🔴 HARD

### Step 1 — Combine Golf Tournament + Golf Sponsorships

These two pages should become one combined page under the Golf Tournament URL (`/golf-tournament/`):

1. Go to **WordPress Admin → Pages**
2. Open the **Golf Tournament** page → click **Edit with Bricks**
3. Add a new section at the bottom: **"Golf Sponsorships"**
4. Copy/paste the content from the Golf Sponsorships page (`/golf-sponsorships/`) into this new section
5. Once the content is merged, go back to **Pages**
6. Find **Golf Sponsorships** → change it to **Draft** (don't delete — keep as backup)
7. Update the navigation (Appearance → Menus) — remove "Golf Sponsorships" from Programs dropdown, keep "Golf Tournament"

### Step 2 — Combine Golf Scholarship with Golf Tournament

Same approach:

1. On the Golf Tournament page in Bricks, add a "Scholarship Recipients" section
2. Or add a link/button: "View Scholarship Recipients →" linking to `/scholarship-recipients/`
3. Your client may also want the scholarship info embedded directly — ask them

### Step 3 — Update Golf Button to 2026

1. On the Golf Tournament page in Bricks
2. Find the CTA button (e.g. "Register for 2025 Golf Classic")
3. Change the text to: **"Register for the 2026 Golf Classic"**
4. Update the button link if a new registration URL exists

### Step 4 — "See You Next Year" for Past Events

For any past event pages (e.g. Teacher Appreciation 2024, Knight of Heroes 2024):

1. Open the event page in Bricks
2. Find the CTA button ("Register", "Buy Tickets", etc.)
3. **Delete the button** and replace it with text:
   - Add a text element: **"See you next year! 🎉"**
   - Style it in teal (#5DCAD1) italic text, centered
4. Optionally add: _"Stay tuned for 2026 announcements."_
5. Click **Save**

---

## SECTION 18 — Local Link: Remove the Word "Discount"

**Difficulty:** 🟡 NORMAL

**Goal:** Rename from "Local Link Discount" to just "Local Link" everywhere.

### Navigation

1. Go to **WordPress Admin → Appearance → Menus**
2. Find **"Local Link Discount"** in the Programs dropdown
3. Click to expand → change **Navigation Label** to: `Local Link`
4. Click **Save Menu**

### Page Title

1. Go to **WordPress Admin → Pages**
2. Find "Local Link Discounts" → click **Quick Edit**
3. Change **Title** to: `Local Link`
4. Update the **Slug** to: `local-link` (only if client agrees — this changes the URL)
5. Click **Update**

### Page Content

1. Open the Local Link page in **Bricks**
2. Find any instance of "Local Link Discount" in the heading, hero text, or body
3. Change each one to just **"Local Link"**
4. Click **Save**

---

## SECTION 19 — Rename "Sponsorship Opps" to "Partnership Opportunities"

**Difficulty:** 🟡 NORMAL

**Goal:** Update this name everywhere — nav, page title, page content.

### Navigation

1. Go to **WordPress Admin → Appearance → Menus**
2. Find **"Sponsorship Opps"** or **"Sponsorship Opportunities"** in the menu
3. Change **Navigation Label** to: `Partnership Opportunities`
4. Click **Save Menu**

### Page Title

1. Go to **WordPress Admin → Pages**
2. Find "Sponsorship Opportunities" (slug: `/sponsorshipopps/`) → **Quick Edit**
3. Change **Title** to: `Partnership Opportunities`
4. Click **Update**

### Page Content (Hero/Heading)

1. Open the page in **Bricks**
2. Update the main H1 heading from "Sponsorship Opportunities" to **"Partnership Opportunities"**
3. Update any other text references on the page
4. Click **Save**

---

## SECTION 20 — Calendar & Events Dropdown: Remove "Blog" + Add "Event Photos"

**Difficulty:** 🔴 HARD

### Remove "Blog" from the Dropdown

1. Go to **WordPress Admin → Appearance → Menus**
2. Expand the **"Calendar & Events"** dropdown
3. Find **"Blog"** → click arrow → click **Remove**
4. Click **Save Menu**

> The Blog/Articles page itself stays — you're only removing it from the nav. If client wants it completely hidden, set it to Draft in Pages.

### Add "Event Photos" Page

1. Go to **WordPress Admin → Pages → Add New**
2. **Title:** Event Photos
3. **Slug:** `/event-photos/`
4. Edit with Bricks — build the page:
   - **Hero:** "Event Photos" heading, subtext: _"Relive the memories from our signature Chamber events"_
   - **Albums grid:** Create a card for each event album:
     - Card: Event name + year, thumbnail photo, link to photo gallery
     - Example albums: "Knight of Heroes 2024", "Golf Classic 2024", "Teacher Appreciation 2024"
   - Use a gallery plugin (e.g. Envira Gallery, Modula, or NextGEN Gallery) for actual photo uploads
5. Publish
6. Add to **Calendar & Events** dropdown in Appearance → Menus

---

## SECTION 21 — Questions to Raise with Your Client

These items from the client's notes are questions or decisions — not immediate build tasks:

| Item                                         | Question to Answer                                                                                                                      |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Utah Strong — Utah-based tech**            | Which tools/companies on the Utah Strong page are Utah-based? Client should provide a list                                              |
| **Mark Dominguez**                           | What is his company? Can you provide a headshot and short bio?                                                                          |
| **Heather**                                  | What is her last name, title, and can you provide a headshot and bio?                                                                   |
| **Point of the Mountain Chamber**            | The client put a "?" — confirm if they want this added or not                                                                           |
| **Member Logins / Event Creation**           | Does the client want a full member login portal? This is a big feature (plugin like MemberPress or BuddyBoss) — needs separate planning |
| **Community vs Forum**                       | Client noted these feel redundant. Are both in the nav? Decide which to keep or merge                                                   |
| **"Sponsorships & Partnerships" page**       | Is this a new page or a rename of the existing Sponsorship page?                                                                        |
| **Residency program**                        | What is the Residency program? What content should go on that page?                                                                     |
| **Golf Scholarship + Golf Tournament merge** | Should scholarship recipients be embedded on the golf page, or just linked?                                                             |
| **Chamber 411 page content**                 | What content should be on the renamed "Chamber 411" page?                                                                               |

---

## SECTION 22 — Quick Reference: All Navigation Changes Summary

After all changes above, here's what each dropdown should look like:

### About Us Dropdown (UPDATED)

- Our Story
- ~~Meet The Staff~~ _(removed — page is now Draft)_
- Board of Directors
- Utah Strong
- ~~Get Involved~~ _(removed — has own top nav)_
- Visitor & Relocation Info
- Supporting Chambers
- Contact Us

### Membership Dropdown (UPDATED)

- Why Become a Member?
- Member Directory
- ~~Sponsorship Opportunities~~ _(removed)_
- **Sponsorships & Partnerships** _(new)_
- Renewals
- Ribbon Cuttings

### Member Resources Dropdown (UPDATED)

- Member Discounts
- Annual Report
- ~~Membership Training~~ → **Chamber 411** _(renamed)_
- Job Board
- Chamber News
- ~~Renew~~ _(removed — already under Membership)_
- **Member Speaks** _(new)_

### Get Involved Dropdown (NO CHANGE)

- Board of Directors
- Committees
- Sponsorship
- Programs

### Programs Dropdown (UPDATED)

- **Residency** _(new — at top)_
- ~~Golf Sponsorships~~ _(merged into Golf Tournament)_
- Golf Tournament _(now includes sponsorships + scholarship info)_
- **Local Link** _(renamed — removed "Discount")_
- Knight of Heroes Event
- **Partnership Opportunities** _(renamed from Sponsorship Opps)_
- Scholarship Recipients
- Teacher Appreciation Event
- **Volunteer** _(new)_

### Calendar & Events Dropdown (UPDATED)

- Events Calendar
- ~~Blog~~ _(removed)_
- **Event Photos** _(new)_

## Hard sections ordered from lower to higher effort

| Order | Section                                                   | Why first                                                 |
| ----- | --------------------------------------------------------- | --------------------------------------------------------- |
| 1     | Section 9 — Annual Report badges + reorder                | Mostly page layout and content reorder                    |
| 2     | Section 20 — Calendar & Events update + Event Photos page | Remove nav item + add one new page                        |
| 3     | Section 12 — Member Speaks page                           | New page build plus content/cards                         |
| 4     | Section 16 — Volunteer + Residency pages                  | Two new pages plus menu placement                         |
| 5     | Section 17 — Golf pages merge + 2026 update               | Content restructure across multiple pages and nav cleanup |
