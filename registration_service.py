import re


class InvalidEmailError(ValueError):
    def __init__(self, email: str):
        super().__init__(f"Invalid email format: {email!r}")


class UnderageError(Exception):
    def __init__(self, age: int):
        super().__init__(f"User age {age} is below the minimum required age of 18")


class RegistrationService:
    EMAIL_PATTERN = r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
    MIN_AGE = 18

    def register_user(self, email: str, age: int) -> bool:
        # Internal invariant check
        assert self.EMAIL_PATTERN is not None and self.MIN_AGE == 18

        if email is None or email.strip() == "":
            raise InvalidEmailError(email)

        if not re.fullmatch(self.EMAIL_PATTERN, email):
            raise InvalidEmailError(email)

        if age < self.MIN_AGE:
            raise UnderageError(age)

        return True