import pytest
from registration_service import RegistrationService, InvalidEmailError, UnderageError


@pytest.fixture
def service():
    return RegistrationService()


def test_successful_registration(service):
    assert service.register_user("ankit123@example.com", 20) is True


def test_invalid_email_empty(service):
    with pytest.raises(InvalidEmailError):
        service.register_user("", 20)


def test_invalid_email_none(service):
    with pytest.raises(InvalidEmailError):
        service.register_user(None, 20)


def test_invalid_email_format(service):
    with pytest.raises(InvalidEmailError):
        service.register_user("ankit.example.com", 20)


def test_underage_user(service):
    with pytest.raises(UnderageError):
        service.register_user("user@example.com", 17)


def test_boundary_age_18(service):
    assert service.register_user("adult@example.com", 18) is True