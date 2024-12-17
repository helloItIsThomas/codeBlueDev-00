at the moment, resetClip and resizeClip in editClip.js
are both dependent on .projectBackCBanner, which is in projectBackC.njk

Instead of including "projectBackC.njk" in index.njk,
i will now be hot swapping that content with dynamicContent.js.
