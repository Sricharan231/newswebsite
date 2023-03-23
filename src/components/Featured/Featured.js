import React from "react"

const Featured = () => {
  return (
    <>
      <section className='culture'>
        <div className='container paddingTB'>
          <h1>Featured Sections</h1>
        
        <h2>Google </h2>
        <div>
          <img src="./images/hero/hero1.jpg"/>
        </div>
        <div>
          <p>IEvery year at I/O we share the latest on privacy and security features on Android. But we know some users like to go a level deeper in understanding how we’re making the latest release safer, and more private, while continuing to offer a seamless experience. So let’s dig into the tools we’re building to better secure your data, enhance your privacy and increase trust in the apps and experiences on your devices.

Low latency, frictionless security

Regardless of whether a smartphone is used for consumer or enterprise purposes, attestation is a key underpinning to ensure the integrity of the device and apps running on the device. Fundamentally, key attestation lets a developer bind a secret or designate data to a device. This is a strong assertion: "same user, same device" as long as the key is available, a cryptographic assertion of integrity can be made.

With Android 13 we have migrated to a new model for the provisioning of attestation keys to Android devices which is known as Remote Key Provisioning (RKP). This new approach will strengthen device security by eliminating factory provisioning errors and providing key vulnerability recovery by moving to an architecture where Google takes more responsibility in the certificate management lifecycle for these attestation keys. You can learn more about RKP here.


We’re also making even more modules updatable directly through Google Play System Updates so we can automatically upgrade more system components and fix bugs, seamlessly, without you having to worry about it. We now have more than 30 components in Android that can be automatically updated through Google Play, including new modules in Android 13 for Bluetooth and ultra-wideband (UWB).

Last year we talked about how the majority of vulnerabilities in major operating systems are caused by undefined behavior in programming languages like C/C++. Rust is an alternative language that provides the efficiency and flexibility required in advanced systems programming (OS, networking) but Rust comes with the added boost of memory safety. We are happy to report that Rust is being adopted in security critical parts of Android, such as our key management components and networking stacks.

Hardening the platform doesn’t just stop with continual improvements with memory safety and expansion of anti-exploitation techniques. It also includes hardening our API surfaces to provide a more secure experience to our end users.

In Android 13 we implemented numerous enhancements to help mitigate potential vulnerabilities that app developers may inadvertently introduce. This includes making runtime receivers safer by allowing developers to specify whether a particular broadcast receiver in their app should be exported and visible to other apps on the device. On top of this, intent filters block non-matching intents which further hardens the app and its components.

For enterprise customers who need to meet certain security certification requirements, we’ve updated our security logging reporting to add more coverage and consolidate security logs in one location. This is helpful for companies that need to meet standards like Common Criteria and is useful for partners such as management solutions providers who can review all security-related logs in one place.

Privacy on your terms

Android 13 brings developers more ways to build privacy-centric apps. Apps can now implement a new Photo picker that allows the user to select the exact photos or videos they want to share without having to give another app access to their media library.


With Android 13, we’re also reducing the number of apps that require your location to function using the nearby devices permission introduced last year. For example, you won’t have to turn on location to enable Wi-fi for certain apps and situations. We’ve also changed how storage works, requiring developers to ask for separate permissions to access audio, image and video files.

Previously, we’ve limited apps from accessing your clipboard in the background and alerted you when an app accessed it. With Android 13, we’re automatically deleting your clipboard history after a short period so apps are blocked from seeing old copied information.

In Android 11, we began automatically resetting permissions for apps you haven’t used for an extended period of time, and have since expanded the feature to devices running Android 6 and above. Since then, we’ve automatically reset over 5 billion permissions.

In Android 13, app makers can go above and beyond in removing permissions even more proactively on behalf of their users. Developers will be able to provide even more privacy by reducing the time their apps have access to unneeded permissions.

Finally, we know notifications are critical for many apps but are not always of equal importance to users. In Android 13, you’ll have more control over which apps you would like to get alerts from, as new apps on your device are required to ask you for permission by default before they can send you notifications.

Apps you can trust

Most app developers build their apps using a variety of software development kits (SDKs) that bundle in pre-packaged functionality. While SDKs provide amazing functionality, app developers typically have little visibility or control over the SDK code or insight into their performance.

We’re working with developers to make their apps more secure with a new Google Play SDK Index that helps them see SDK safety and reliability signals before they build the code into their apps. This ensures we're helping everyone build a more secure and private app ecosystem.

Last month, we also started rolling out a new Data safety section in Google Play to help you understand how apps plan to collect, share, and protect your data, before you install it. To instill even more trust in Play apps, we're enabling developers to have their apps independently validated against OWASP’s MASVS, a globally recognized standard for mobile app security.


We’re working with a small group of developers and authorized lab partners to evolve the program. Developers who have completed this independent validation can showcase this on their Data safety section.

Additional mobile security and safety

Just like our anti-malware protection Google Play, which now scans 125 billion apps a day, we believe spam and phishing detection should be built in. We’re proud to announce that in a recent analyst report, Messages was the highest rated built-in messaging app for anti-phishing and scams protection.

Messages is now also helping to protect you against 1.5 billion spam messages per month, so you can avoid both annoying texts and attempts to access your data. These phishing attempts are increasingly how bad actors are trying to get your information, by getting you to click on a link or download an app, so we are always looking for ways to offer another line of defense.


Last year, we introduced end-to-end encryption in Messages to provide more security for your mobile conversations. Later this year, we’ll launch end-to-end encryption group conversations in beta to ensure your personal messages get even more protection.

As with a lot of features we build, we try to do it in an open and transparent way. In Android 11 we announced a new platform feature that was backed by an ISO standard to enable the use of digital IDs on a smartphone in a privacy-preserving way. When you hand over your plastic license (or other credential) to someone for verification it’s all or nothing which means they have access to your full name, date of birth, address, and other personally identifiable information (PII). The mobile version of this allows for much more fine-grained control where the end user and/or app can select exactly what to share with the verifier. In addition, the verifier must declare whether they intend to retain the data returned. In addition, you can present certain details of your credentials, such as age, without revealing your identity.

Over the last two Android releases we have been improving this API and making it easier for third-party organizations to leverage it for various digital identity use cases, such as driver’s licenses, student IDs, or corporate badges. We’re now announcing that Google Wallet uses Android Identity Credential to support digital IDs and driver’s licenses. We’re working with states in the US and governments around the world to bring digital IDs to Wallet later this year. You can learn more about all of the new enhancements in Google Wallet here.

Protected by Android

We don’t think your security and privacy should be hard to understand and control. Later this year, we’ll begin rolling out a new destination in settings on Android 13 devices that puts all your device security and data privacy front and center.


The new Security & Privacy settings page will give you a simple, color-coded way to understand your safety status and will offer clear and actionable guidance to improve it. The page will be anchored by new action cards that notify you of critical steps you should take to address any safety risks. In addition to notifications to warn you about issues, we’ll also provide timely recommendations on how to enhance your privacy.

We know that to feel safe and in control of your data, you need to have a secure foundation you can count on. Because if your device isn’t secure, it’s not private either. We’re working hard to make sure you’re always protected by Android. Learn more about these protections on our website.</p>
        </div>
        </div>
      </section>
    </>
  )
}

export default Featured;
