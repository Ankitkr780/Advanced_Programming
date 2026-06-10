# score_processor.py

class ScoreProcessor:

    def process_score_file(self, file_path: str) -> int:
        try:
            with open(file_path, "r") as file:
                content = file.read().strip()

                score = int(content)
                result = score * 10

        except FileNotFoundError:
            print(f"Error: File '{file_path}' not found.")
            raise

        except ValueError:
            print("Error: Invalid data format. File must contain a valid integer.")
            raise

        else:
            print("Data processed successfully")
            return result

        finally:
            print("File cleanup completed")