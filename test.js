// Simple test to verify our fact fetching function
async function testCatFactFetch() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        
        // Check if response has the expected structure
        if (data.fact && typeof data.fact === 'string') {
            console.log('✅ Test passed: Cat fact API is working');
            return true;
        } else {
            console.log('❌ Test failed: Unexpected API response format');
            return false;
        }
    } catch (error) {
        console.log('❌ Test failed: Could not fetch from API', error);
        return false;
    }
}

// Run the test when this file is executed in a Node environment
if (typeof window === 'undefined') {
    testCatFactFetch().then(success => {
        process.exit(success ? 0 : 1);
    });
}
