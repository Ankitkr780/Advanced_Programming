#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct
{
    char *data;
    size_t length;
    size_t capacity;

} StringBuffer;

StringBuffer *sb_init(size_t initial_capacity)
{
    StringBuffer *sb = (StringBuffer *)malloc(sizeof(StringBuffer));

    if (sb == NULL)
    {
        printf("Failed to allocate memory for StringBuffer\n");
        return NULL;
    }

    sb->data = (char *)malloc(initial_capacity * sizeof(char));

    if (sb->data == NULL)
    {
        printf("Failed to allocate memory for data buffer\n");
        free(sb);
        return NULL;
    }

    sb->length = 0;
    sb->capacity = initial_capacity;

    sb->data[0] = '\0';

    return sb;
}


void sb_append(StringBuffer *sb, const char *str)
{
    if (sb == NULL || str == NULL)
        return;

    size_t str_len = strlen(str);

   
    size_t required = sb->length + str_len + 1;

  
    while (required > sb->capacity)
    {
        size_t new_capacity = sb->capacity * 2;

        printf("\nGrowing buffer:\n");
        printf("Old Capacity = %zu\n", sb->capacity);
        printf("New Capacity = %zu\n", new_capacity);

   
        char *temp = (char *)realloc(sb->data, new_capacity);

        if (temp == NULL)
        {
            printf("Realloc failed\n");
            return;
        }

        sb->data = temp;
        sb->capacity = new_capacity;
    }

   
    strcpy(sb->data + sb->length, str);

    sb->length += str_len;
}


void sb_free(StringBuffer *sb)
{
    if (sb == NULL)
        return;

    free(sb->data);
    free(sb);
}

int main()
{
    
    StringBuffer *sb = sb_init(8);

    if (sb == NULL)
        return 1;

    printf("Initial Capacity = %zu\n", sb->capacity);

    sb_append(sb, "Hello");
    printf("\nBuffer: %s\n", sb->data);
    printf("Length: %zu\n", sb->length);
    printf("Capacity: %zu\n", sb->capacity);

    sb_append(sb, " World!");
    printf("\nBuffer: %s\n", sb->data);
    printf("Length: %zu\n", sb->length);
    printf("Capacity: %zu\n", sb->capacity);

    sb_append(sb, " This is a dynamic string buffer implementation in C.");
    printf("\nBuffer: %s\n", sb->data);
    printf("Length: %zu\n", sb->length);
    printf("Capacity: %zu\n", sb->capacity);

    sb_free(sb);

    printf("\nAll memory freed successfully.\n");

    return 0;
}