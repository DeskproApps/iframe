# IFrame App Setup

To install the IFrame App, just enter the App settings, and fill the following details:

- **IFrame URL** - The URL for the App.
- **Column Height** - The height of the column in which the iframe will be displayed.
- **Column Width** - The width of the column in which the iframe will be displayed.

In the field for the IFrame URL, Deskpro Agent values can be incorporated. One example of such integration is:
https://www.google.com/showUser?email={{currentAgent.primaryEmail}}

The following variables can be utilized in this context:

**Current Agent** (available everywhere)
- `currentAgent.id`
- `currentAgent.firstName`
- `currentAgent.lastName`
- `currentAgent.name`
- `currentAgent.primaryEmail`
- `currentAgent.avatarUrl`
- `currentAgent.language`
- `currentAgent.locale`


**Ticket** (available in ticket sidebar only)
- `ticket.id`
- `ticket.permalinkUrl`
- `ticket.createdAt`
- `ticket.creationSystem`
- `ticket.subject`
- `ticket.status`
- `ticket.statusChangedAt`
- `ticket.lastUserReplyAt`
- `ticket.ref`
- `ticket.agent.`
    - `id`
    - `email`
    - `firstName`
    - `lastName`
    - `displayName`
    - `language`
    - `locale`
- `ticket.department.`
    - `id`
    - `name`
- `ticket.team.`
    - `id`
    - `name`
- `ticket.organization.`
    - `id`
    - `name`
- `ticket.primaryUser`
    - `id`
    - `email`
    - `firstName`
    - `lastName`
    - `displayName`
    - `language`
    - `locale`

Using these variables, Deskpro Agent values can be dynamically inserted into the IFrame URL field to personalize the user experience.
