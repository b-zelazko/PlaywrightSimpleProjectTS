import { test, expect } from '@playwright/test';

test('Sprawdzenie czy API ma 10 rekordów', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();

  expect(Array.isArray(data)).toBeTruthy();
  expect(data.length).toBe(10);
  })

test('Sprawdzenie czy użytkownicy mają wymagane klucze', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(response.ok()).toBeTruthy();
  
  const data = await response.json();
  const requiredKeys = ['id', 'name', 'email', 'address'];

  for (const user of data) {
    for (const key of requiredKeys) {
      expect(user).toHaveProperty(key);
    }
  }
  
  })