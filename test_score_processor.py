# test_score_processor.py

import pytest
from score_processor import ScoreProcessor


def test_successful_score_processing(tmp_path):
    # Create temporary file with valid numeric data
    file = tmp_path / "score.txt"
    file.write_text("7")

    processor = ScoreProcessor()

    result = processor.process_score_file(str(file))

    assert result == 70


def test_missing_file():
    processor = ScoreProcessor()

    with pytest.raises(FileNotFoundError):
        processor.process_score_file("missing_file.txt")


def test_invalid_file_data(tmp_path):
    # Create temporary file with invalid data
    file = tmp_path / "invalid.txt"
    file.write_text("abc")

    processor = ScoreProcessor()

    with pytest.raises(ValueError):
        processor.process_score_file(str(file))