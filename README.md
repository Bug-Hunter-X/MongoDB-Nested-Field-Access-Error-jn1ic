# MongoDB Nested Field Access Error

This repository demonstrates a common error when working with nested fields in MongoDB documents. The error occurs when attempting to access a nested field that may be missing in some documents, leading to an undefined error.

## Bug Description
The bug involves accessing nested fields within MongoDB documents. If the nested field is not present in all documents, accessing it directly can throw an error. 

## Solution
The solution uses optional chaining and nullish coalescing to gracefully handle cases where the nested field is missing. This prevents the error and allows for more robust code.