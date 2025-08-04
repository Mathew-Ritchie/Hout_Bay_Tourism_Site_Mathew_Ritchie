import React, { useRef, useEffect } from "react";

export default function StatComponent() {
  // We use a ref to get a direct reference to the component's main container element
  const statComponentRef = useRef(null);

  // A ref to prevent the animation from running multiple times
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        // Loop through all the entries being observed
        entries.forEach((entry) => {
          // Check if the component is intersecting (i.e., visible in the viewport)
          // and if the animation has not already run
          if (entry.isIntersecting && !hasAnimated.current) {
            // Get all the spans that need to be animated
            const counters = entry.target.querySelectorAll("span[data-countto]");
            counters.forEach((counter) => {
              const targetNumber = parseFloat(counter.getAttribute("data-countto"));
              const unit = counter.getAttribute("data-unit") || "";
              const decimalPlaces = parseInt(counter.getAttribute("data-decimal"), 10) || 0;
              let currentNumber = 0;
              const duration = 1000; // Animation duration in milliseconds
              const startTime = performance.now();

              const updateCounter = (timestamp) => {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                currentNumber = progress * targetNumber;

                // Update the counter text with the correct number of decimal places
                counter.textContent = currentNumber.toFixed(decimalPlaces);
                counter.textContent += unit;

                if (progress < 1) {
                  requestAnimationFrame(updateCounter);
                } else {
                  // Ensure the final value is exactly the target number
                  counter.textContent = targetNumber.toFixed(decimalPlaces) + unit;
                }
              };

              requestAnimationFrame(updateCounter);
            });
            // Mark the animation as complete to prevent re-running
            hasAnimated.current = true;
            // Stop observing after the animation has started
            observer.unobserve(entry.target);
          }
        });
      },
      // Set a threshold of 0.5, meaning the callback fires when 50% of the element is visible
      { threshold: 0.5 }
    );

    // Start observing the component
    if (statComponentRef.current) {
      observer.observe(statComponentRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (statComponentRef.current) {
        observer.unobserve(statComponentRef.current);
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="pb-10 px-4 sm:px-10  md:px-20 lg:px-20">
      <hr className="pb-10 px-4 sm:px-10  md:px-20 lg:px-20"></hr>
      <h2 className="landing-sub-title pb-5 text-center ">Interesting Stats</h2>
      <div
        ref={statComponentRef}
        className="w-full container flex flex-col items-center gap-16 mx-auto"
        id="pricing"
      >
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 pb-8">
          <div>
            <h3 className="font-extrabold text-3xl text-dark-grey-900 text-center leading-tight">
              <span data-countto="33.3" data-decimal="1" data-unit="km">
                0
              </span>
            </h3>
            <p className="text-base font-medium text-center text-gray-600 leading-7">
              Distance from Airport
            </p>
          </div>
          <div>
            <h3 className="font-extrabold text-3xl text-dark-grey-900 text-center leading-tight">
              <span data-countto="19.3" data-decimal="1" data-unit="km">
                0
              </span>
            </h3>
            <p className="text-base font-medium text-center text-gray-600 leading-7">
              Distance from V&A Waterfront
            </p>
          </div>
          <div>
            <h3 className="font-extrabold text-3xl text-dark-grey-900 text-center leading-tight">
              <span data-countto="1000" data-decimal="0" data-unit="m+-">
                0
              </span>
            </h3>
            <p className="text-base font-medium text-center text-gray-600 leading-7">
              Beach Length
            </p>
          </div>
          <div>
            <h3 className="font-extrabold text-3xl text-dark-grey-900 text-center leading-tight">
              <span data-countto="42000" data-decimal="0" data-unit="+-">
                0
              </span>
            </h3>
            <p className="text-base font-medium text-center text-gray-600 leading-7">Population</p>
          </div>
        </div>
      </div>
      <hr className="pb-10 px-4 sm:px-10  md:px-20 lg:px-20"></hr>
    </div>
  );
}
