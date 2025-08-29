import { helloWorld, helloWorld2 } from '../src/main.js';

class TestRunner {
    constructor() {
        this.tests = [];
    }

    test(name, fn) {
        this.tests.push({ name, fn });
    }

    assertEqual(actual, expected) {
        if (actual !== expected) {
            throw new Error(`Assertion failed: expected "${expected}", got "${actual}"`);
        }
    }

    run() {
        let passed = 0;
        let failed = 0;
        this.tests.forEach(({ name, fn }) => {
            try {
                fn();
                console.log(`✓ ${name}`);
                passed++;
            } catch (e) {
                console.error(`✗ ${name}: ${e.message}`);
                failed++;
            }
        });
        console.log(`${passed} passed, ${failed} failed`);
    }
}

const runner = new TestRunner();

// Test for helloWorld
runner.test('helloWorld should return greeting', () => {
    const result = helloWorld();
    runner.assertEqual(result, "Hello, World");
});

// Test for helloWorld2
runner.test('helloWorld2 should return greeting', () => {
    const result = helloWorld2();
    runner.assertEqual(result, "Hello, World!");
});

runner.run();