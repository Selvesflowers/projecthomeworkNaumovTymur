# CI/CD Configuration

The project includes GitHub Actions workflow:

`/.github/workflows/backend-ci.yml`

The workflow:

- installs Python dependencies;
- runs Django migrations with SQLite;
- runs automated tests.

For a classroom demo, this is enough to show that the backend can be checked automatically after each push.
