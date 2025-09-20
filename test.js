// Simple test to verify our fact fetching function (works in Node 14+ and browser)
async function testCatFactFetch() {
  try {
    // Use global fetch if present (Node 18+/browser); otherwise lazy-load node-fetch
    const _fetch = (typeof fetch !== 'undefined')
      ? fetch
      : (await import('node-fetch')).default;

    const response = await _fetch('https://catfact.ninja/fact');
    const data = await response.json();

    if (data && typeof data.fact === 'string' && data.fact.length > 0) {
      console.log('✅ Test passed: Cat fact API is working');
      return true;
    } else {
      console.log('❌ Test failed: Unexpected API response format', data);
      return false;
    }
  } catch (error) {
    console.log('❌ Test failed: Could not fetch from API', error);
    return false;
  }
}

// Run the test when executed in Node (not in the browser)
if (typeof window === 'undefined') {
  testCatFactFetch().then(success => process.exit(success ? 0 : 1));
}
