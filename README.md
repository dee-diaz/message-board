# Message Board

A small real-time-feeling chat room built with **Express** and **EJS**. A visitor enters their name, gets dropped into a shared chat room, and can read and post messages. Identity is kept in a server-side session, and messages live in memory for the life of the server process.

**Live demo:** <https://message-board-i10h.onrender.com>

> Built as a learning project to practice Express routing, the MVC pattern, server-side sessions, form validation, and server-rendered views.
>
> _Hosted on Render's free tier — the first request after a period of inactivity may take a few seconds to wake the server._

## Features

- **Name gate** — enter a name on the landing page before joining the chat.
- **Session-based identity** — the name is stored in a server-side session (`express-session`); your own messages render aligned to the right.
- **Server-rendered chat** — messages are formatted (e.g. `10:05 AM • June 15`) in the controller and rendered with EJS.
- **Form validation** — both the name and message inputs are validated server-side with `express-validator`.
- **Route guards** — the chat page redirects to the landing page if you have no active session.
- **Responsive UI** — a dark, mobile-first chat layout that becomes a centered card on larger screens.

## Tech stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Server         | Express 5                       |
| Views          | EJS                             |
| Sessions       | express-session                 |
| Validation     | express-validator               |
| Request logs   | morgan                          |
| Env config     | dotenv                          |
| Package manager | pnpm                           |

## Project structure

```
message-board/
├── app.js                  # Express app: middleware, routes, server start
├── controllers/
│   ├── indexController.js   # Landing page: render form, capture name into session
│   └── chatController.js    # Chat page: render messages, handle new posts
├── routes/
│   ├── indexRouter.js       # "/" routes + name validation
│   └── chatRouter.js        # "/chat" routes + message validation
├── views/
│   ├── index.ejs            # Name-entry form
│   └── chat.ejs             # Chat room
├── public/
│   └── styles.css           # All styling (design tokens + chat UI)
├── data/
│   └── messages.js          # Seed messages (in-memory store)
└── .env                     # Local secrets (not committed)
```

## Getting started

### Prerequisites

- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/) (the project is configured for it; npm also works)

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment

Create a `.env` file in the project root:

```env
SESSION_SECRET=replace-with-a-long-random-string
PORT=3000
```

- `SESSION_SECRET` is **required** — it signs the session cookie. Generate a strong one with:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
- `PORT` is optional and defaults to `3000`.

### 3. Run the app

```bash
pnpm start
```

Then open <http://localhost:3000>.

## How it works

1. **`GET /`** renders the name-entry form.
2. **`POST /`** validates the name; on success it saves `req.session.userName` and redirects to `/chat`.
3. **`GET /chat`** redirects back to `/` if there's no session, otherwise formats the messages and renders the chat room.
4. **`POST /chat`** validates the message, pushes it to the in-memory `messages` array with the sender and a timestamp, then redirects back to `/chat`.
5. Any unmatched route redirects home.

## Notes & limitations

- **Messages are stored in memory.** They persist across page reloads (the server process keeps the array in memory) but reset to the seed data whenever the server **restarts**. There is no database.
- **Single shared room.** All users post into the same message list.
- Intended for local learning, not production.

## Possible next steps

- Persist messages in a database (e.g. SQLite or PostgreSQL).
- Add `nodemon` and a `dev` script for auto-reload during development.
- Harden the session cookie (`httpOnly`, `secure`, `sameSite`) for deployment.
- Move date formatting into a shared `utils/` helper if more views need it.
- Add real-time updates with WebSockets so new messages appear without a reload.
