
// POST //

async function postMedicalEnrollment($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
		vals['enrollmentApproved'] = valueEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
		vals['enrollmentImmunizations'] = valueEnrollmentImmunizations;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
		vals['familyAddress'] = valueFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
		vals['enrollmentSpecialConsiderations'] = valueEnrollmentSpecialConsiderations;

	var valuePatientMedicalConditions = $formValues.find('.valuePatientMedicalConditions').val();
	if(valuePatientMedicalConditions != null && valuePatientMedicalConditions !== '')
		vals['patientMedicalConditions'] = valuePatientMedicalConditions;

	var valuePatientPreviousClinicsAttended = $formValues.find('.valuePatientPreviousClinicsAttended').val();
	if(valuePatientPreviousClinicsAttended != null && valuePatientPreviousClinicsAttended !== '')
		vals['patientPreviousClinicsAttended'] = valuePatientPreviousClinicsAttended;

	var valueFamilyHowDoYouKnowTheClinic = $formValues.find('.valueFamilyHowDoYouKnowTheClinic').val();
	if(valueFamilyHowDoYouKnowTheClinic != null && valueFamilyHowDoYouKnowTheClinic !== '')
		vals['familyHowDoYouKnowTheClinic'] = valueFamilyHowDoYouKnowTheClinic;

	var valuePatientDescription = $formValues.find('.valuePatientDescription').val();
	if(valuePatientDescription != null && valuePatientDescription !== '')
		vals['patientDescription'] = valuePatientDescription;

	var valuePatientObjectives = $formValues.find('.valuePatientObjectives').val();
	if(valuePatientObjectives != null && valuePatientObjectives !== '')
		vals['patientObjectives'] = valuePatientObjectives;

		vals['patientKey'] = [valuePatientKey];
	if(valuePatientKey != null && valuePatientKey !== '')
		vals['patientKey'] = valuePatientKey;

	var valueUserKeys = [];
	$formValues.find('input.valueUserKeys:checked').each(function(index) {
		valueUserKeys.push($(this).val());
	});
	if(valueUserKeys.length > 0)
		vals['userKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valuePatientCompleteName = $formValues.find('.valuePatientCompleteName').val();
	if(valuePatientCompleteName != null && valuePatientCompleteName !== '')
		vals['patientCompleteName'] = valuePatientCompleteName;

	var valuePatientCompleteNamePreferred = $formValues.find('.valuePatientCompleteNamePreferred').val();
	if(valuePatientCompleteNamePreferred != null && valuePatientCompleteNamePreferred !== '')
		vals['patientCompleteNamePreferred'] = valuePatientCompleteNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
		vals['patientBirthDate'] = valuePatientBirthDate;

	var valueClinicAddress = $formValues.find('.valueClinicAddress').val();
	if(valueClinicAddress != null && valueClinicAddress !== '')
		vals['clinicAddress'] = valueClinicAddress;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
		vals['enrollmentSignature1'] = valueEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
		vals['enrollmentSignature2'] = valueEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
		vals['enrollmentSignature3'] = valueEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
		vals['enrollmentSignature4'] = valueEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
		vals['enrollmentSignature5'] = valueEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
		vals['enrollmentSignature6'] = valueEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
		vals['enrollmentSignature7'] = valueEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
		vals['enrollmentSignature8'] = valueEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
		vals['enrollmentSignature9'] = valueEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
		vals['enrollmentSignature10'] = valueEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
		vals['enrollmentDate1'] = valueEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
		vals['enrollmentDate2'] = valueEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
		vals['enrollmentDate3'] = valueEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
		vals['enrollmentDate4'] = valueEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
		vals['enrollmentDate5'] = valueEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
		vals['enrollmentDate6'] = valueEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
		vals['enrollmentDate7'] = valueEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
		vals['enrollmentDate8'] = valueEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
		vals['enrollmentDate9'] = valueEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
		vals['enrollmentDate10'] = valueEnrollmentDate10;

	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postMedicalEnrollmentVals(vals, success, error) {
	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportMedicalEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportMedicalEnrollmentVals(JSON.parse(json), success, error);
}

function putimportMedicalEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeMedicalEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeMedicalEnrollmentVals(JSON.parse(json), success, error);
}

function putmergeMedicalEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyMedicalEnrollment($formValues, pk, success, error) {
	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
		vals['enrollmentApproved'] = valueEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
		vals['enrollmentImmunizations'] = valueEnrollmentImmunizations;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
		vals['familyAddress'] = valueFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
		vals['enrollmentSpecialConsiderations'] = valueEnrollmentSpecialConsiderations;

	var valuePatientMedicalConditions = $formValues.find('.valuePatientMedicalConditions').val();
	if(valuePatientMedicalConditions != null && valuePatientMedicalConditions !== '')
		vals['patientMedicalConditions'] = valuePatientMedicalConditions;

	var valuePatientPreviousClinicsAttended = $formValues.find('.valuePatientPreviousClinicsAttended').val();
	if(valuePatientPreviousClinicsAttended != null && valuePatientPreviousClinicsAttended !== '')
		vals['patientPreviousClinicsAttended'] = valuePatientPreviousClinicsAttended;

	var valueFamilyHowDoYouKnowTheClinic = $formValues.find('.valueFamilyHowDoYouKnowTheClinic').val();
	if(valueFamilyHowDoYouKnowTheClinic != null && valueFamilyHowDoYouKnowTheClinic !== '')
		vals['familyHowDoYouKnowTheClinic'] = valueFamilyHowDoYouKnowTheClinic;

	var valuePatientDescription = $formValues.find('.valuePatientDescription').val();
	if(valuePatientDescription != null && valuePatientDescription !== '')
		vals['patientDescription'] = valuePatientDescription;

	var valuePatientObjectives = $formValues.find('.valuePatientObjectives').val();
	if(valuePatientObjectives != null && valuePatientObjectives !== '')
		vals['patientObjectives'] = valuePatientObjectives;

	var valuePatientKey = $formValues.find('input.valuePatientKey:checked').val();
	if(valuePatientKey != null && valuePatientKey !== '')
		vals['patientKey'] = valuePatientKey;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['userKeys'] = [valueUserKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valuePatientCompleteName = $formValues.find('.valuePatientCompleteName').val();
	if(valuePatientCompleteName != null && valuePatientCompleteName !== '')
		vals['patientCompleteName'] = valuePatientCompleteName;

	var valuePatientCompleteNamePreferred = $formValues.find('.valuePatientCompleteNamePreferred').val();
	if(valuePatientCompleteNamePreferred != null && valuePatientCompleteNamePreferred !== '')
		vals['patientCompleteNamePreferred'] = valuePatientCompleteNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
		vals['patientBirthDate'] = valuePatientBirthDate;

	var valueClinicAddress = $formValues.find('.valueClinicAddress').val();
	if(valueClinicAddress != null && valueClinicAddress !== '')
		vals['clinicAddress'] = valueClinicAddress;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
		vals['enrollmentSignature1'] = valueEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
		vals['enrollmentSignature2'] = valueEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
		vals['enrollmentSignature3'] = valueEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
		vals['enrollmentSignature4'] = valueEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
		vals['enrollmentSignature5'] = valueEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
		vals['enrollmentSignature6'] = valueEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
		vals['enrollmentSignature7'] = valueEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
		vals['enrollmentSignature8'] = valueEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
		vals['enrollmentSignature9'] = valueEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
		vals['enrollmentSignature10'] = valueEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
		vals['enrollmentDate1'] = valueEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
		vals['enrollmentDate2'] = valueEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
		vals['enrollmentDate3'] = valueEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
		vals['enrollmentDate4'] = valueEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
		vals['enrollmentDate5'] = valueEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
		vals['enrollmentDate6'] = valueEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
		vals['enrollmentDate7'] = valueEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
		vals['enrollmentDate8'] = valueEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
		vals['enrollmentDate9'] = valueEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
		vals['enrollmentDate10'] = valueEnrollmentDate10;

	putcopyMedicalEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyMedicalEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchMedicalEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = patchMedicalEnrollmentFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
	var removeEnrollmentApproved = $formFilters.find('.removeEnrollmentApproved').val() === 'true';
	var valueEnrollmentApprovedSelectVal = $formValues.find('select.setEnrollmentApproved').val();
	var valueEnrollmentApproved = null;
	if(valueEnrollmentApprovedSelectVal !== '')
		valueEnrollmentApproved = valueEnrollmentApprovedSelectVal == 'true';
	setEnrollmentApproved = removeEnrollmentApproved ? null : valueEnrollmentApproved;
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
	var removeEnrollmentImmunizations = $formFilters.find('.removeEnrollmentImmunizations').val() === 'true';
	var valueEnrollmentImmunizationsSelectVal = $formValues.find('select.setEnrollmentImmunizations').val();
	var valueEnrollmentImmunizations = null;
	if(valueEnrollmentImmunizationsSelectVal !== '')
		valueEnrollmentImmunizations = valueEnrollmentImmunizationsSelectVal == 'true';
	setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : valueEnrollmentImmunizations;
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
	var removeFamilyAddress = $formFilters.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
	var removeEnrollmentSpecialConsiderations = $formFilters.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var valuePatientMedicalConditions = $formValues.find('.valuePatientMedicalConditions').val();
	if(valuePatientMedicalConditions != null && valuePatientMedicalConditions !== '')
	var removePatientMedicalConditions = $formFilters.find('.removePatientMedicalConditions').val() === 'true';
	var setPatientMedicalConditions = removePatientMedicalConditions ? null : $formValues.find('.setPatientMedicalConditions').val();
	if(removePatientMedicalConditions || setPatientMedicalConditions != null && setPatientMedicalConditions !== '')
		vals['setPatientMedicalConditions'] = setPatientMedicalConditions;
	var addPatientMedicalConditions = $formValues.find('.addPatientMedicalConditions').val();
	if(addPatientMedicalConditions != null && addPatientMedicalConditions !== '')
		vals['addPatientMedicalConditions'] = addPatientMedicalConditions;
	var removePatientMedicalConditions = $formValues.find('.removePatientMedicalConditions').val();
	if(removePatientMedicalConditions != null && removePatientMedicalConditions !== '')
		vals['removePatientMedicalConditions'] = removePatientMedicalConditions;

	var valuePatientPreviousClinicsAttended = $formValues.find('.valuePatientPreviousClinicsAttended').val();
	if(valuePatientPreviousClinicsAttended != null && valuePatientPreviousClinicsAttended !== '')
	var removePatientPreviousClinicsAttended = $formFilters.find('.removePatientPreviousClinicsAttended').val() === 'true';
	var setPatientPreviousClinicsAttended = removePatientPreviousClinicsAttended ? null : $formValues.find('.setPatientPreviousClinicsAttended').val();
	if(removePatientPreviousClinicsAttended || setPatientPreviousClinicsAttended != null && setPatientPreviousClinicsAttended !== '')
		vals['setPatientPreviousClinicsAttended'] = setPatientPreviousClinicsAttended;
	var addPatientPreviousClinicsAttended = $formValues.find('.addPatientPreviousClinicsAttended').val();
	if(addPatientPreviousClinicsAttended != null && addPatientPreviousClinicsAttended !== '')
		vals['addPatientPreviousClinicsAttended'] = addPatientPreviousClinicsAttended;
	var removePatientPreviousClinicsAttended = $formValues.find('.removePatientPreviousClinicsAttended').val();
	if(removePatientPreviousClinicsAttended != null && removePatientPreviousClinicsAttended !== '')
		vals['removePatientPreviousClinicsAttended'] = removePatientPreviousClinicsAttended;

	var valueFamilyHowDoYouKnowTheClinic = $formValues.find('.valueFamilyHowDoYouKnowTheClinic').val();
	if(valueFamilyHowDoYouKnowTheClinic != null && valueFamilyHowDoYouKnowTheClinic !== '')
	var removeFamilyHowDoYouKnowTheClinic = $formFilters.find('.removeFamilyHowDoYouKnowTheClinic').val() === 'true';
	var setFamilyHowDoYouKnowTheClinic = removeFamilyHowDoYouKnowTheClinic ? null : $formValues.find('.setFamilyHowDoYouKnowTheClinic').val();
	if(removeFamilyHowDoYouKnowTheClinic || setFamilyHowDoYouKnowTheClinic != null && setFamilyHowDoYouKnowTheClinic !== '')
		vals['setFamilyHowDoYouKnowTheClinic'] = setFamilyHowDoYouKnowTheClinic;
	var addFamilyHowDoYouKnowTheClinic = $formValues.find('.addFamilyHowDoYouKnowTheClinic').val();
	if(addFamilyHowDoYouKnowTheClinic != null && addFamilyHowDoYouKnowTheClinic !== '')
		vals['addFamilyHowDoYouKnowTheClinic'] = addFamilyHowDoYouKnowTheClinic;
	var removeFamilyHowDoYouKnowTheClinic = $formValues.find('.removeFamilyHowDoYouKnowTheClinic').val();
	if(removeFamilyHowDoYouKnowTheClinic != null && removeFamilyHowDoYouKnowTheClinic !== '')
		vals['removeFamilyHowDoYouKnowTheClinic'] = removeFamilyHowDoYouKnowTheClinic;

	var valuePatientDescription = $formValues.find('.valuePatientDescription').val();
	if(valuePatientDescription != null && valuePatientDescription !== '')
	var removePatientDescription = $formFilters.find('.removePatientDescription').val() === 'true';
	var setPatientDescription = removePatientDescription ? null : $formValues.find('.setPatientDescription').val();
	if(removePatientDescription || setPatientDescription != null && setPatientDescription !== '')
		vals['setPatientDescription'] = setPatientDescription;
	var addPatientDescription = $formValues.find('.addPatientDescription').val();
	if(addPatientDescription != null && addPatientDescription !== '')
		vals['addPatientDescription'] = addPatientDescription;
	var removePatientDescription = $formValues.find('.removePatientDescription').val();
	if(removePatientDescription != null && removePatientDescription !== '')
		vals['removePatientDescription'] = removePatientDescription;

	var valuePatientObjectives = $formValues.find('.valuePatientObjectives').val();
	if(valuePatientObjectives != null && valuePatientObjectives !== '')
	var removePatientObjectives = $formFilters.find('.removePatientObjectives').val() === 'true';
	var setPatientObjectives = removePatientObjectives ? null : $formValues.find('.setPatientObjectives').val();
	if(removePatientObjectives || setPatientObjectives != null && setPatientObjectives !== '')
		vals['setPatientObjectives'] = setPatientObjectives;
	var addPatientObjectives = $formValues.find('.addPatientObjectives').val();
	if(addPatientObjectives != null && addPatientObjectives !== '')
		vals['addPatientObjectives'] = addPatientObjectives;
	var removePatientObjectives = $formValues.find('.removePatientObjectives').val();
	if(removePatientObjectives != null && removePatientObjectives !== '')
		vals['removePatientObjectives'] = removePatientObjectives;

	var valuePatientKey = $formValues.find('input.valuePatientKey:checked').val();
	if(valuePatientKey != null && valuePatientKey !== '')
		vals['setPatientKey'] = valuePatientKey;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['addUserKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
	var removeSessionId = $formFilters.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formValues.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
	var removeUserId = $formFilters.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
	var removeUserKey = $formFilters.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valuePatientCompleteName = $formValues.find('.valuePatientCompleteName').val();
	if(valuePatientCompleteName != null && valuePatientCompleteName !== '')
	var removePatientCompleteName = $formFilters.find('.removePatientCompleteName').val() === 'true';
	var setPatientCompleteName = removePatientCompleteName ? null : $formValues.find('.setPatientCompleteName').val();
	if(removePatientCompleteName || setPatientCompleteName != null && setPatientCompleteName !== '')
		vals['setPatientCompleteName'] = setPatientCompleteName;
	var addPatientCompleteName = $formValues.find('.addPatientCompleteName').val();
	if(addPatientCompleteName != null && addPatientCompleteName !== '')
		vals['addPatientCompleteName'] = addPatientCompleteName;
	var removePatientCompleteName = $formValues.find('.removePatientCompleteName').val();
	if(removePatientCompleteName != null && removePatientCompleteName !== '')
		vals['removePatientCompleteName'] = removePatientCompleteName;

	var valuePatientCompleteNamePreferred = $formValues.find('.valuePatientCompleteNamePreferred').val();
	if(valuePatientCompleteNamePreferred != null && valuePatientCompleteNamePreferred !== '')
	var removePatientCompleteNamePreferred = $formFilters.find('.removePatientCompleteNamePreferred').val() === 'true';
	var setPatientCompleteNamePreferred = removePatientCompleteNamePreferred ? null : $formValues.find('.setPatientCompleteNamePreferred').val();
	if(removePatientCompleteNamePreferred || setPatientCompleteNamePreferred != null && setPatientCompleteNamePreferred !== '')
		vals['setPatientCompleteNamePreferred'] = setPatientCompleteNamePreferred;
	var addPatientCompleteNamePreferred = $formValues.find('.addPatientCompleteNamePreferred').val();
	if(addPatientCompleteNamePreferred != null && addPatientCompleteNamePreferred !== '')
		vals['addPatientCompleteNamePreferred'] = addPatientCompleteNamePreferred;
	var removePatientCompleteNamePreferred = $formValues.find('.removePatientCompleteNamePreferred').val();
	if(removePatientCompleteNamePreferred != null && removePatientCompleteNamePreferred !== '')
		vals['removePatientCompleteNamePreferred'] = removePatientCompleteNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
	var removePatientBirthDate = $formFilters.find('.removePatientBirthDate').val() === 'true';
	var setPatientBirthDate = removePatientBirthDate ? null : $formValues.find('.setPatientBirthDate').val();
	if(removePatientBirthDate || setPatientBirthDate != null && setPatientBirthDate !== '')
		vals['setPatientBirthDate'] = setPatientBirthDate;
	var addPatientBirthDate = $formValues.find('.addPatientBirthDate').val();
	if(addPatientBirthDate != null && addPatientBirthDate !== '')
		vals['addPatientBirthDate'] = addPatientBirthDate;
	var removePatientBirthDate = $formValues.find('.removePatientBirthDate').val();
	if(removePatientBirthDate != null && removePatientBirthDate !== '')
		vals['removePatientBirthDate'] = removePatientBirthDate;

	var valueClinicAddress = $formValues.find('.valueClinicAddress').val();
	if(valueClinicAddress != null && valueClinicAddress !== '')
	var removeClinicAddress = $formFilters.find('.removeClinicAddress').val() === 'true';
	var setClinicAddress = removeClinicAddress ? null : $formValues.find('.setClinicAddress').val();
	if(removeClinicAddress || setClinicAddress != null && setClinicAddress !== '')
		vals['setClinicAddress'] = setClinicAddress;
	var addClinicAddress = $formValues.find('.addClinicAddress').val();
	if(addClinicAddress != null && addClinicAddress !== '')
		vals['addClinicAddress'] = addClinicAddress;
	var removeClinicAddress = $formValues.find('.removeClinicAddress').val();
	if(removeClinicAddress != null && removeClinicAddress !== '')
		vals['removeClinicAddress'] = removeClinicAddress;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
	var removeCustomerProfileId = $formFilters.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
	var removeEnrollmentSignature1 = $formFilters.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
	var removeEnrollmentSignature2 = $formFilters.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
	var removeEnrollmentSignature3 = $formFilters.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
	var removeEnrollmentSignature4 = $formFilters.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
	var removeEnrollmentSignature5 = $formFilters.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
	var removeEnrollmentSignature6 = $formFilters.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
	var removeEnrollmentSignature7 = $formFilters.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
	var removeEnrollmentSignature8 = $formFilters.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
	var removeEnrollmentSignature9 = $formFilters.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
	var removeEnrollmentSignature10 = $formFilters.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
	var removeEnrollmentDate1 = $formFilters.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
	var removeEnrollmentDate2 = $formFilters.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
	var removeEnrollmentDate3 = $formFilters.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
	var removeEnrollmentDate4 = $formFilters.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
	var removeEnrollmentDate5 = $formFilters.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
	var removeEnrollmentDate6 = $formFilters.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
	var removeEnrollmentDate7 = $formFilters.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
	var removeEnrollmentDate8 = $formFilters.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
	var removeEnrollmentDate9 = $formFilters.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
	var removeEnrollmentDate10 = $formFilters.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

	patchMedicalEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchMedicalEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterPatientMedicalConditions = $formFilters.find('.valuePatientMedicalConditions').val();
		if(filterPatientMedicalConditions != null && filterPatientMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'patientMedicalConditions:' + filterPatientMedicalConditions });

		var filterPatientPreviousClinicsAttended = $formFilters.find('.valuePatientPreviousClinicsAttended').val();
		if(filterPatientPreviousClinicsAttended != null && filterPatientPreviousClinicsAttended !== '')
			filters.push({ name: 'fq', value: 'patientPreviousClinicsAttended:' + filterPatientPreviousClinicsAttended });

		var filterFamilyHowDoYouKnowTheClinic = $formFilters.find('.valueFamilyHowDoYouKnowTheClinic').val();
		if(filterFamilyHowDoYouKnowTheClinic != null && filterFamilyHowDoYouKnowTheClinic !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheClinic:' + filterFamilyHowDoYouKnowTheClinic });

		var filterPatientDescription = $formFilters.find('.valuePatientDescription').val();
		if(filterPatientDescription != null && filterPatientDescription !== '')
			filters.push({ name: 'fq', value: 'patientDescription:' + filterPatientDescription });

		var filterPatientObjectives = $formFilters.find('.valuePatientObjectives').val();
		if(filterPatientObjectives != null && filterPatientObjectives !== '')
			filters.push({ name: 'fq', value: 'patientObjectives:' + filterPatientObjectives });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterClinicKey = $formFilters.find('.valueClinicKey').val();
		if(filterClinicKey != null && filterClinicKey !== '')
			filters.push({ name: 'fq', value: 'clinicKey:' + filterClinicKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterMedicalSort = $formFilters.find('.valueMedicalSort').val();
		if(filterMedicalSort != null && filterMedicalSort !== '')
			filters.push({ name: 'fq', value: 'medicalSort:' + filterMedicalSort });

		var filterClinicSort = $formFilters.find('.valueClinicSort').val();
		if(filterClinicSort != null && filterClinicSort !== '')
			filters.push({ name: 'fq', value: 'clinicSort:' + filterClinicSort });

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientFamilyName = $formFilters.find('.valuePatientFamilyName').val();
		if(filterPatientFamilyName != null && filterPatientFamilyName !== '')
			filters.push({ name: 'fq', value: 'patientFamilyName:' + filterPatientFamilyName });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });

		var filterPatientBirthMonth = $formFilters.find('.valuePatientBirthMonth').val();
		if(filterPatientBirthMonth != null && filterPatientBirthMonth !== '')
			filters.push({ name: 'fq', value: 'patientBirthMonth:' + filterPatientBirthMonth });

		var filterPatientBirthDay = $formFilters.find('.valuePatientBirthDay').val();
		if(filterPatientBirthDay != null && filterPatientBirthDay !== '')
			filters.push({ name: 'fq', value: 'patientBirthDay:' + filterPatientBirthDay });

		var filterClinicName = $formFilters.find('.valueClinicName').val();
		if(filterClinicName != null && filterClinicName !== '')
			filters.push({ name: 'fq', value: 'clinicName:' + filterClinicName });

		var filterClinicCompleteName = $formFilters.find('.valueClinicCompleteName').val();
		if(filterClinicCompleteName != null && filterClinicCompleteName !== '')
			filters.push({ name: 'fq', value: 'clinicCompleteName:' + filterClinicCompleteName });

		var filterClinicLocation = $formFilters.find('.valueClinicLocation').val();
		if(filterClinicLocation != null && filterClinicLocation !== '')
			filters.push({ name: 'fq', value: 'clinicLocation:' + filterClinicLocation });

		var filterClinicAddress = $formFilters.find('.valueClinicAddress').val();
		if(filterClinicAddress != null && filterClinicAddress !== '')
			filters.push({ name: 'fq', value: 'clinicAddress:' + filterClinicAddress });

		var filterClinicPhoneNumber = $formFilters.find('.valueClinicPhoneNumber').val();
		if(filterClinicPhoneNumber != null && filterClinicPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'clinicPhoneNumber:' + filterClinicPhoneNumber });

		var filterClinicAdministratorName = $formFilters.find('.valueClinicAdministratorName').val();
		if(filterClinicAdministratorName != null && filterClinicAdministratorName !== '')
			filters.push({ name: 'fq', value: 'clinicAdministratorName:' + filterClinicAdministratorName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function patchMedicalEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchMedicalEnrollmentVals(filters, vals, success, error);
}

function patchMedicalEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getMedicalEnrollment(pk) {
	$.ajax({
		url: '/api/enrollment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchMedicalEnrollment($formFilters, success, error) {
	var filters = searchMedicalEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchMedicalEnrollmentVals(filters, success, error);
}

function searchMedicalEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterPatientMedicalConditions = $formFilters.find('.valuePatientMedicalConditions').val();
		if(filterPatientMedicalConditions != null && filterPatientMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'patientMedicalConditions:' + filterPatientMedicalConditions });

		var filterPatientPreviousClinicsAttended = $formFilters.find('.valuePatientPreviousClinicsAttended').val();
		if(filterPatientPreviousClinicsAttended != null && filterPatientPreviousClinicsAttended !== '')
			filters.push({ name: 'fq', value: 'patientPreviousClinicsAttended:' + filterPatientPreviousClinicsAttended });

		var filterFamilyHowDoYouKnowTheClinic = $formFilters.find('.valueFamilyHowDoYouKnowTheClinic').val();
		if(filterFamilyHowDoYouKnowTheClinic != null && filterFamilyHowDoYouKnowTheClinic !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheClinic:' + filterFamilyHowDoYouKnowTheClinic });

		var filterPatientDescription = $formFilters.find('.valuePatientDescription').val();
		if(filterPatientDescription != null && filterPatientDescription !== '')
			filters.push({ name: 'fq', value: 'patientDescription:' + filterPatientDescription });

		var filterPatientObjectives = $formFilters.find('.valuePatientObjectives').val();
		if(filterPatientObjectives != null && filterPatientObjectives !== '')
			filters.push({ name: 'fq', value: 'patientObjectives:' + filterPatientObjectives });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterClinicKey = $formFilters.find('.valueClinicKey').val();
		if(filterClinicKey != null && filterClinicKey !== '')
			filters.push({ name: 'fq', value: 'clinicKey:' + filterClinicKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterMedicalSort = $formFilters.find('.valueMedicalSort').val();
		if(filterMedicalSort != null && filterMedicalSort !== '')
			filters.push({ name: 'fq', value: 'medicalSort:' + filterMedicalSort });

		var filterClinicSort = $formFilters.find('.valueClinicSort').val();
		if(filterClinicSort != null && filterClinicSort !== '')
			filters.push({ name: 'fq', value: 'clinicSort:' + filterClinicSort });

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientFamilyName = $formFilters.find('.valuePatientFamilyName').val();
		if(filterPatientFamilyName != null && filterPatientFamilyName !== '')
			filters.push({ name: 'fq', value: 'patientFamilyName:' + filterPatientFamilyName });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });

		var filterPatientBirthMonth = $formFilters.find('.valuePatientBirthMonth').val();
		if(filterPatientBirthMonth != null && filterPatientBirthMonth !== '')
			filters.push({ name: 'fq', value: 'patientBirthMonth:' + filterPatientBirthMonth });

		var filterPatientBirthDay = $formFilters.find('.valuePatientBirthDay').val();
		if(filterPatientBirthDay != null && filterPatientBirthDay !== '')
			filters.push({ name: 'fq', value: 'patientBirthDay:' + filterPatientBirthDay });

		var filterClinicName = $formFilters.find('.valueClinicName').val();
		if(filterClinicName != null && filterClinicName !== '')
			filters.push({ name: 'fq', value: 'clinicName:' + filterClinicName });

		var filterClinicCompleteName = $formFilters.find('.valueClinicCompleteName').val();
		if(filterClinicCompleteName != null && filterClinicCompleteName !== '')
			filters.push({ name: 'fq', value: 'clinicCompleteName:' + filterClinicCompleteName });

		var filterClinicLocation = $formFilters.find('.valueClinicLocation').val();
		if(filterClinicLocation != null && filterClinicLocation !== '')
			filters.push({ name: 'fq', value: 'clinicLocation:' + filterClinicLocation });

		var filterClinicAddress = $formFilters.find('.valueClinicAddress').val();
		if(filterClinicAddress != null && filterClinicAddress !== '')
			filters.push({ name: 'fq', value: 'clinicAddress:' + filterClinicAddress });

		var filterClinicPhoneNumber = $formFilters.find('.valueClinicPhoneNumber').val();
		if(filterClinicPhoneNumber != null && filterClinicPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'clinicPhoneNumber:' + filterClinicPhoneNumber });

		var filterClinicAdministratorName = $formFilters.find('.valueClinicAdministratorName').val();
		if(filterClinicAdministratorName != null && filterClinicAdministratorName !== '')
			filters.push({ name: 'fq', value: 'clinicAdministratorName:' + filterClinicAdministratorName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function searchMedicalEnrollmentVals(filters, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMedicalEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalEnrollmentVals($formFilters, success, error);
}

function suggestMedicalEnrollmentPatientKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-hostpital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_patientKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePatientKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_patientKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchMedicalEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'PatientKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#MedicalEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalPatientVals(filters, success, error);
}

function suggestMedicalEnrollmentUserKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_userKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueUserKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_userKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchMedicalEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UserKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#MedicalEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

// AdminSearch //

async function adminsearchMedicalEnrollment($formFilters, success, error) {
	var filters = adminsearchMedicalEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchMedicalEnrollmentVals(filters, success, error);
}

function adminsearchMedicalEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterPatientMedicalConditions = $formFilters.find('.valuePatientMedicalConditions').val();
		if(filterPatientMedicalConditions != null && filterPatientMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'patientMedicalConditions:' + filterPatientMedicalConditions });

		var filterPatientPreviousClinicsAttended = $formFilters.find('.valuePatientPreviousClinicsAttended').val();
		if(filterPatientPreviousClinicsAttended != null && filterPatientPreviousClinicsAttended !== '')
			filters.push({ name: 'fq', value: 'patientPreviousClinicsAttended:' + filterPatientPreviousClinicsAttended });

		var filterFamilyHowDoYouKnowTheClinic = $formFilters.find('.valueFamilyHowDoYouKnowTheClinic').val();
		if(filterFamilyHowDoYouKnowTheClinic != null && filterFamilyHowDoYouKnowTheClinic !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheClinic:' + filterFamilyHowDoYouKnowTheClinic });

		var filterPatientDescription = $formFilters.find('.valuePatientDescription').val();
		if(filterPatientDescription != null && filterPatientDescription !== '')
			filters.push({ name: 'fq', value: 'patientDescription:' + filterPatientDescription });

		var filterPatientObjectives = $formFilters.find('.valuePatientObjectives').val();
		if(filterPatientObjectives != null && filterPatientObjectives !== '')
			filters.push({ name: 'fq', value: 'patientObjectives:' + filterPatientObjectives });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterClinicKey = $formFilters.find('.valueClinicKey').val();
		if(filterClinicKey != null && filterClinicKey !== '')
			filters.push({ name: 'fq', value: 'clinicKey:' + filterClinicKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterMedicalSort = $formFilters.find('.valueMedicalSort').val();
		if(filterMedicalSort != null && filterMedicalSort !== '')
			filters.push({ name: 'fq', value: 'medicalSort:' + filterMedicalSort });

		var filterClinicSort = $formFilters.find('.valueClinicSort').val();
		if(filterClinicSort != null && filterClinicSort !== '')
			filters.push({ name: 'fq', value: 'clinicSort:' + filterClinicSort });

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientFamilyName = $formFilters.find('.valuePatientFamilyName').val();
		if(filterPatientFamilyName != null && filterPatientFamilyName !== '')
			filters.push({ name: 'fq', value: 'patientFamilyName:' + filterPatientFamilyName });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });

		var filterPatientBirthMonth = $formFilters.find('.valuePatientBirthMonth').val();
		if(filterPatientBirthMonth != null && filterPatientBirthMonth !== '')
			filters.push({ name: 'fq', value: 'patientBirthMonth:' + filterPatientBirthMonth });

		var filterPatientBirthDay = $formFilters.find('.valuePatientBirthDay').val();
		if(filterPatientBirthDay != null && filterPatientBirthDay !== '')
			filters.push({ name: 'fq', value: 'patientBirthDay:' + filterPatientBirthDay });

		var filterClinicName = $formFilters.find('.valueClinicName').val();
		if(filterClinicName != null && filterClinicName !== '')
			filters.push({ name: 'fq', value: 'clinicName:' + filterClinicName });

		var filterClinicCompleteName = $formFilters.find('.valueClinicCompleteName').val();
		if(filterClinicCompleteName != null && filterClinicCompleteName !== '')
			filters.push({ name: 'fq', value: 'clinicCompleteName:' + filterClinicCompleteName });

		var filterClinicLocation = $formFilters.find('.valueClinicLocation').val();
		if(filterClinicLocation != null && filterClinicLocation !== '')
			filters.push({ name: 'fq', value: 'clinicLocation:' + filterClinicLocation });

		var filterClinicAddress = $formFilters.find('.valueClinicAddress').val();
		if(filterClinicAddress != null && filterClinicAddress !== '')
			filters.push({ name: 'fq', value: 'clinicAddress:' + filterClinicAddress });

		var filterClinicPhoneNumber = $formFilters.find('.valueClinicPhoneNumber').val();
		if(filterClinicPhoneNumber != null && filterClinicPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'clinicPhoneNumber:' + filterClinicPhoneNumber });

		var filterClinicAdministratorName = $formFilters.find('.valueClinicAdministratorName').val();
		if(filterClinicAdministratorName != null && filterClinicAdministratorName !== '')
			filters.push({ name: 'fq', value: 'clinicAdministratorName:' + filterClinicAdministratorName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function adminsearchMedicalEnrollmentVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMedicalEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalEnrollmentVals($formFilters, success, error);
}

function suggestMedicalEnrollmentPatientKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-hostpital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_patientKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePatientKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_patientKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchMedicalEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'PatientKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#MedicalEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalPatientVals(filters, success, error);
}

function suggestMedicalEnrollmentUserKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_userKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueUserKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_userKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchMedicalEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UserKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#MedicalEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

// PATCHPayments //

async function patchpaymentsMedicalEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = patchpaymentsMedicalEnrollmentFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
	var removeEnrollmentApproved = $formFilters.find('.removeEnrollmentApproved').val() === 'true';
	var valueEnrollmentApprovedSelectVal = $formValues.find('select.setEnrollmentApproved').val();
	var valueEnrollmentApproved = null;
	if(valueEnrollmentApprovedSelectVal !== '')
		valueEnrollmentApproved = valueEnrollmentApprovedSelectVal == 'true';
	setEnrollmentApproved = removeEnrollmentApproved ? null : valueEnrollmentApproved;
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
	var removeEnrollmentImmunizations = $formFilters.find('.removeEnrollmentImmunizations').val() === 'true';
	var valueEnrollmentImmunizationsSelectVal = $formValues.find('select.setEnrollmentImmunizations').val();
	var valueEnrollmentImmunizations = null;
	if(valueEnrollmentImmunizationsSelectVal !== '')
		valueEnrollmentImmunizations = valueEnrollmentImmunizationsSelectVal == 'true';
	setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : valueEnrollmentImmunizations;
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
	var removeFamilyAddress = $formFilters.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
	var removeEnrollmentSpecialConsiderations = $formFilters.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var valuePatientMedicalConditions = $formValues.find('.valuePatientMedicalConditions').val();
	if(valuePatientMedicalConditions != null && valuePatientMedicalConditions !== '')
	var removePatientMedicalConditions = $formFilters.find('.removePatientMedicalConditions').val() === 'true';
	var setPatientMedicalConditions = removePatientMedicalConditions ? null : $formValues.find('.setPatientMedicalConditions').val();
	if(removePatientMedicalConditions || setPatientMedicalConditions != null && setPatientMedicalConditions !== '')
		vals['setPatientMedicalConditions'] = setPatientMedicalConditions;
	var addPatientMedicalConditions = $formValues.find('.addPatientMedicalConditions').val();
	if(addPatientMedicalConditions != null && addPatientMedicalConditions !== '')
		vals['addPatientMedicalConditions'] = addPatientMedicalConditions;
	var removePatientMedicalConditions = $formValues.find('.removePatientMedicalConditions').val();
	if(removePatientMedicalConditions != null && removePatientMedicalConditions !== '')
		vals['removePatientMedicalConditions'] = removePatientMedicalConditions;

	var valuePatientPreviousClinicsAttended = $formValues.find('.valuePatientPreviousClinicsAttended').val();
	if(valuePatientPreviousClinicsAttended != null && valuePatientPreviousClinicsAttended !== '')
	var removePatientPreviousClinicsAttended = $formFilters.find('.removePatientPreviousClinicsAttended').val() === 'true';
	var setPatientPreviousClinicsAttended = removePatientPreviousClinicsAttended ? null : $formValues.find('.setPatientPreviousClinicsAttended').val();
	if(removePatientPreviousClinicsAttended || setPatientPreviousClinicsAttended != null && setPatientPreviousClinicsAttended !== '')
		vals['setPatientPreviousClinicsAttended'] = setPatientPreviousClinicsAttended;
	var addPatientPreviousClinicsAttended = $formValues.find('.addPatientPreviousClinicsAttended').val();
	if(addPatientPreviousClinicsAttended != null && addPatientPreviousClinicsAttended !== '')
		vals['addPatientPreviousClinicsAttended'] = addPatientPreviousClinicsAttended;
	var removePatientPreviousClinicsAttended = $formValues.find('.removePatientPreviousClinicsAttended').val();
	if(removePatientPreviousClinicsAttended != null && removePatientPreviousClinicsAttended !== '')
		vals['removePatientPreviousClinicsAttended'] = removePatientPreviousClinicsAttended;

	var valueFamilyHowDoYouKnowTheClinic = $formValues.find('.valueFamilyHowDoYouKnowTheClinic').val();
	if(valueFamilyHowDoYouKnowTheClinic != null && valueFamilyHowDoYouKnowTheClinic !== '')
	var removeFamilyHowDoYouKnowTheClinic = $formFilters.find('.removeFamilyHowDoYouKnowTheClinic').val() === 'true';
	var setFamilyHowDoYouKnowTheClinic = removeFamilyHowDoYouKnowTheClinic ? null : $formValues.find('.setFamilyHowDoYouKnowTheClinic').val();
	if(removeFamilyHowDoYouKnowTheClinic || setFamilyHowDoYouKnowTheClinic != null && setFamilyHowDoYouKnowTheClinic !== '')
		vals['setFamilyHowDoYouKnowTheClinic'] = setFamilyHowDoYouKnowTheClinic;
	var addFamilyHowDoYouKnowTheClinic = $formValues.find('.addFamilyHowDoYouKnowTheClinic').val();
	if(addFamilyHowDoYouKnowTheClinic != null && addFamilyHowDoYouKnowTheClinic !== '')
		vals['addFamilyHowDoYouKnowTheClinic'] = addFamilyHowDoYouKnowTheClinic;
	var removeFamilyHowDoYouKnowTheClinic = $formValues.find('.removeFamilyHowDoYouKnowTheClinic').val();
	if(removeFamilyHowDoYouKnowTheClinic != null && removeFamilyHowDoYouKnowTheClinic !== '')
		vals['removeFamilyHowDoYouKnowTheClinic'] = removeFamilyHowDoYouKnowTheClinic;

	var valuePatientDescription = $formValues.find('.valuePatientDescription').val();
	if(valuePatientDescription != null && valuePatientDescription !== '')
	var removePatientDescription = $formFilters.find('.removePatientDescription').val() === 'true';
	var setPatientDescription = removePatientDescription ? null : $formValues.find('.setPatientDescription').val();
	if(removePatientDescription || setPatientDescription != null && setPatientDescription !== '')
		vals['setPatientDescription'] = setPatientDescription;
	var addPatientDescription = $formValues.find('.addPatientDescription').val();
	if(addPatientDescription != null && addPatientDescription !== '')
		vals['addPatientDescription'] = addPatientDescription;
	var removePatientDescription = $formValues.find('.removePatientDescription').val();
	if(removePatientDescription != null && removePatientDescription !== '')
		vals['removePatientDescription'] = removePatientDescription;

	var valuePatientObjectives = $formValues.find('.valuePatientObjectives').val();
	if(valuePatientObjectives != null && valuePatientObjectives !== '')
	var removePatientObjectives = $formFilters.find('.removePatientObjectives').val() === 'true';
	var setPatientObjectives = removePatientObjectives ? null : $formValues.find('.setPatientObjectives').val();
	if(removePatientObjectives || setPatientObjectives != null && setPatientObjectives !== '')
		vals['setPatientObjectives'] = setPatientObjectives;
	var addPatientObjectives = $formValues.find('.addPatientObjectives').val();
	if(addPatientObjectives != null && addPatientObjectives !== '')
		vals['addPatientObjectives'] = addPatientObjectives;
	var removePatientObjectives = $formValues.find('.removePatientObjectives').val();
	if(removePatientObjectives != null && removePatientObjectives !== '')
		vals['removePatientObjectives'] = removePatientObjectives;

	var valuePatientKey = $formValues.find('input.valuePatientKey:checked').val();
	if(valuePatientKey != null && valuePatientKey !== '')
		vals['setPatientKey'] = valuePatientKey;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['addUserKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
	var removeSessionId = $formFilters.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formValues.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
	var removeUserId = $formFilters.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
	var removeUserKey = $formFilters.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valuePatientCompleteName = $formValues.find('.valuePatientCompleteName').val();
	if(valuePatientCompleteName != null && valuePatientCompleteName !== '')
	var removePatientCompleteName = $formFilters.find('.removePatientCompleteName').val() === 'true';
	var setPatientCompleteName = removePatientCompleteName ? null : $formValues.find('.setPatientCompleteName').val();
	if(removePatientCompleteName || setPatientCompleteName != null && setPatientCompleteName !== '')
		vals['setPatientCompleteName'] = setPatientCompleteName;
	var addPatientCompleteName = $formValues.find('.addPatientCompleteName').val();
	if(addPatientCompleteName != null && addPatientCompleteName !== '')
		vals['addPatientCompleteName'] = addPatientCompleteName;
	var removePatientCompleteName = $formValues.find('.removePatientCompleteName').val();
	if(removePatientCompleteName != null && removePatientCompleteName !== '')
		vals['removePatientCompleteName'] = removePatientCompleteName;

	var valuePatientCompleteNamePreferred = $formValues.find('.valuePatientCompleteNamePreferred').val();
	if(valuePatientCompleteNamePreferred != null && valuePatientCompleteNamePreferred !== '')
	var removePatientCompleteNamePreferred = $formFilters.find('.removePatientCompleteNamePreferred').val() === 'true';
	var setPatientCompleteNamePreferred = removePatientCompleteNamePreferred ? null : $formValues.find('.setPatientCompleteNamePreferred').val();
	if(removePatientCompleteNamePreferred || setPatientCompleteNamePreferred != null && setPatientCompleteNamePreferred !== '')
		vals['setPatientCompleteNamePreferred'] = setPatientCompleteNamePreferred;
	var addPatientCompleteNamePreferred = $formValues.find('.addPatientCompleteNamePreferred').val();
	if(addPatientCompleteNamePreferred != null && addPatientCompleteNamePreferred !== '')
		vals['addPatientCompleteNamePreferred'] = addPatientCompleteNamePreferred;
	var removePatientCompleteNamePreferred = $formValues.find('.removePatientCompleteNamePreferred').val();
	if(removePatientCompleteNamePreferred != null && removePatientCompleteNamePreferred !== '')
		vals['removePatientCompleteNamePreferred'] = removePatientCompleteNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
	var removePatientBirthDate = $formFilters.find('.removePatientBirthDate').val() === 'true';
	var setPatientBirthDate = removePatientBirthDate ? null : $formValues.find('.setPatientBirthDate').val();
	if(removePatientBirthDate || setPatientBirthDate != null && setPatientBirthDate !== '')
		vals['setPatientBirthDate'] = setPatientBirthDate;
	var addPatientBirthDate = $formValues.find('.addPatientBirthDate').val();
	if(addPatientBirthDate != null && addPatientBirthDate !== '')
		vals['addPatientBirthDate'] = addPatientBirthDate;
	var removePatientBirthDate = $formValues.find('.removePatientBirthDate').val();
	if(removePatientBirthDate != null && removePatientBirthDate !== '')
		vals['removePatientBirthDate'] = removePatientBirthDate;

	var valueClinicAddress = $formValues.find('.valueClinicAddress').val();
	if(valueClinicAddress != null && valueClinicAddress !== '')
	var removeClinicAddress = $formFilters.find('.removeClinicAddress').val() === 'true';
	var setClinicAddress = removeClinicAddress ? null : $formValues.find('.setClinicAddress').val();
	if(removeClinicAddress || setClinicAddress != null && setClinicAddress !== '')
		vals['setClinicAddress'] = setClinicAddress;
	var addClinicAddress = $formValues.find('.addClinicAddress').val();
	if(addClinicAddress != null && addClinicAddress !== '')
		vals['addClinicAddress'] = addClinicAddress;
	var removeClinicAddress = $formValues.find('.removeClinicAddress').val();
	if(removeClinicAddress != null && removeClinicAddress !== '')
		vals['removeClinicAddress'] = removeClinicAddress;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
	var removeCustomerProfileId = $formFilters.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
	var removeEnrollmentSignature1 = $formFilters.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
	var removeEnrollmentSignature2 = $formFilters.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
	var removeEnrollmentSignature3 = $formFilters.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
	var removeEnrollmentSignature4 = $formFilters.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
	var removeEnrollmentSignature5 = $formFilters.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
	var removeEnrollmentSignature6 = $formFilters.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
	var removeEnrollmentSignature7 = $formFilters.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
	var removeEnrollmentSignature8 = $formFilters.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
	var removeEnrollmentSignature9 = $formFilters.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
	var removeEnrollmentSignature10 = $formFilters.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
	var removeEnrollmentDate1 = $formFilters.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
	var removeEnrollmentDate2 = $formFilters.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
	var removeEnrollmentDate3 = $formFilters.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
	var removeEnrollmentDate4 = $formFilters.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
	var removeEnrollmentDate5 = $formFilters.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
	var removeEnrollmentDate6 = $formFilters.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
	var removeEnrollmentDate7 = $formFilters.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
	var removeEnrollmentDate8 = $formFilters.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
	var removeEnrollmentDate9 = $formFilters.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
	var removeEnrollmentDate10 = $formFilters.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

	patchpaymentsMedicalEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchpaymentsMedicalEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterPatientMedicalConditions = $formFilters.find('.valuePatientMedicalConditions').val();
		if(filterPatientMedicalConditions != null && filterPatientMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'patientMedicalConditions:' + filterPatientMedicalConditions });

		var filterPatientPreviousClinicsAttended = $formFilters.find('.valuePatientPreviousClinicsAttended').val();
		if(filterPatientPreviousClinicsAttended != null && filterPatientPreviousClinicsAttended !== '')
			filters.push({ name: 'fq', value: 'patientPreviousClinicsAttended:' + filterPatientPreviousClinicsAttended });

		var filterFamilyHowDoYouKnowTheClinic = $formFilters.find('.valueFamilyHowDoYouKnowTheClinic').val();
		if(filterFamilyHowDoYouKnowTheClinic != null && filterFamilyHowDoYouKnowTheClinic !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheClinic:' + filterFamilyHowDoYouKnowTheClinic });

		var filterPatientDescription = $formFilters.find('.valuePatientDescription').val();
		if(filterPatientDescription != null && filterPatientDescription !== '')
			filters.push({ name: 'fq', value: 'patientDescription:' + filterPatientDescription });

		var filterPatientObjectives = $formFilters.find('.valuePatientObjectives').val();
		if(filterPatientObjectives != null && filterPatientObjectives !== '')
			filters.push({ name: 'fq', value: 'patientObjectives:' + filterPatientObjectives });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterClinicKey = $formFilters.find('.valueClinicKey').val();
		if(filterClinicKey != null && filterClinicKey !== '')
			filters.push({ name: 'fq', value: 'clinicKey:' + filterClinicKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterMedicalSort = $formFilters.find('.valueMedicalSort').val();
		if(filterMedicalSort != null && filterMedicalSort !== '')
			filters.push({ name: 'fq', value: 'medicalSort:' + filterMedicalSort });

		var filterClinicSort = $formFilters.find('.valueClinicSort').val();
		if(filterClinicSort != null && filterClinicSort !== '')
			filters.push({ name: 'fq', value: 'clinicSort:' + filterClinicSort });

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientFamilyName = $formFilters.find('.valuePatientFamilyName').val();
		if(filterPatientFamilyName != null && filterPatientFamilyName !== '')
			filters.push({ name: 'fq', value: 'patientFamilyName:' + filterPatientFamilyName });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });

		var filterPatientBirthMonth = $formFilters.find('.valuePatientBirthMonth').val();
		if(filterPatientBirthMonth != null && filterPatientBirthMonth !== '')
			filters.push({ name: 'fq', value: 'patientBirthMonth:' + filterPatientBirthMonth });

		var filterPatientBirthDay = $formFilters.find('.valuePatientBirthDay').val();
		if(filterPatientBirthDay != null && filterPatientBirthDay !== '')
			filters.push({ name: 'fq', value: 'patientBirthDay:' + filterPatientBirthDay });

		var filterClinicName = $formFilters.find('.valueClinicName').val();
		if(filterClinicName != null && filterClinicName !== '')
			filters.push({ name: 'fq', value: 'clinicName:' + filterClinicName });

		var filterClinicCompleteName = $formFilters.find('.valueClinicCompleteName').val();
		if(filterClinicCompleteName != null && filterClinicCompleteName !== '')
			filters.push({ name: 'fq', value: 'clinicCompleteName:' + filterClinicCompleteName });

		var filterClinicLocation = $formFilters.find('.valueClinicLocation').val();
		if(filterClinicLocation != null && filterClinicLocation !== '')
			filters.push({ name: 'fq', value: 'clinicLocation:' + filterClinicLocation });

		var filterClinicAddress = $formFilters.find('.valueClinicAddress').val();
		if(filterClinicAddress != null && filterClinicAddress !== '')
			filters.push({ name: 'fq', value: 'clinicAddress:' + filterClinicAddress });

		var filterClinicPhoneNumber = $formFilters.find('.valueClinicPhoneNumber').val();
		if(filterClinicPhoneNumber != null && filterClinicPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'clinicPhoneNumber:' + filterClinicPhoneNumber });

		var filterClinicAdministratorName = $formFilters.find('.valueClinicAdministratorName').val();
		if(filterClinicAdministratorName != null && filterClinicAdministratorName !== '')
			filters.push({ name: 'fq', value: 'clinicAdministratorName:' + filterClinicAdministratorName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function patchpaymentsMedicalEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchpaymentsMedicalEnrollmentVals(filters, vals, success, error);
}

function patchpaymentsMedicalEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/enrollment/payments?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketMedicalEnrollment(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketMedicalEnrollment', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-blue-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-notes-medical w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify enrollments');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-blue-gray ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketMedicalPatient', function (error, message) {
			$('#Page_patientKey').trigger('oninput');
			$('#Page_patientKey_add').text('add a patient');
			$('#Page_patientKey_add').removeClass('w3-disabled');
			$('#Page_patientKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_userKeys').trigger('oninput');
			$('#Page_userKeys_add').text('add a site user');
			$('#Page_userKeys_add').removeClass('w3-disabled');
			$('#Page_userKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketMedicalPatient', function (error, message) {
			$('#Page_patientKey').trigger('oninput');
			$('#Page_patientKey_add').text('add a patient');
			$('#Page_patientKey_add').removeClass('w3-disabled');
			$('#Page_patientKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_userKeys').trigger('oninput');
			$('#Page_userKeys_add').text('add a site user');
			$('#Page_userKeys_add').removeClass('w3-disabled');
			$('#Page_userKeys_add').attr('disabled', false);
		});
	}
}
async function websocketMedicalEnrollmentInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchMedicalEnrollmentVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputMedicalEnrollment' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputMedicalEnrollment' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputMedicalEnrollment' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputMedicalEnrollment' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'Deleted'));
			}
			var val = o['enrollmentApproved'];
			if(vars.includes('enrollmentApproved')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentApproved').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentApproved').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentApproved'));
			}
			var val = o['enrollmentImmunizations'];
			if(vars.includes('enrollmentImmunizations')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentImmunizations').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentImmunizations').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentImmunizations'));
			}
			var val = o['familyAddress'];
			if(vars.includes('familyAddress')) {
				$('.inputMedicalEnrollment' + pk + 'FamilyAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'FamilyAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'FamilyAddress'));
			}
			var val = o['enrollmentSpecialConsiderations'];
			if(vars.includes('enrollmentSpecialConsiderations')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSpecialConsiderations').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSpecialConsiderations').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSpecialConsiderations'));
			}
			var val = o['patientMedicalConditions'];
			if(vars.includes('patientMedicalConditions')) {
				$('.inputMedicalEnrollment' + pk + 'PatientMedicalConditions').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientMedicalConditions').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientMedicalConditions'));
			}
			var val = o['patientPreviousClinicsAttended'];
			if(vars.includes('patientPreviousClinicsAttended')) {
				$('.inputMedicalEnrollment' + pk + 'PatientPreviousClinicsAttended').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientPreviousClinicsAttended').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientPreviousClinicsAttended'));
			}
			var val = o['familyHowDoYouKnowTheClinic'];
			if(vars.includes('familyHowDoYouKnowTheClinic')) {
				$('.inputMedicalEnrollment' + pk + 'FamilyHowDoYouKnowTheClinic').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'FamilyHowDoYouKnowTheClinic').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'FamilyHowDoYouKnowTheClinic'));
			}
			var val = o['patientDescription'];
			if(vars.includes('patientDescription')) {
				$('.inputMedicalEnrollment' + pk + 'PatientDescription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientDescription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientDescription'));
			}
			var val = o['patientObjectives'];
			if(vars.includes('patientObjectives')) {
				$('.inputMedicalEnrollment' + pk + 'PatientObjectives').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientObjectives').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientObjectives'));
			}
			var val = o['patientKey'];
			if(vars.includes('patientKey')) {
				$('.inputMedicalEnrollment' + pk + 'PatientKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientKey'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputMedicalEnrollment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'UserKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputMedicalEnrollment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputMedicalEnrollment' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputMedicalEnrollment' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputMedicalEnrollment' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'UserKey'));
			}
			var val = o['patientCompleteName'];
			if(vars.includes('patientCompleteName')) {
				$('.inputMedicalEnrollment' + pk + 'PatientCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientCompleteName'));
			}
			var val = o['patientCompleteNamePreferred'];
			if(vars.includes('patientCompleteNamePreferred')) {
				$('.inputMedicalEnrollment' + pk + 'PatientCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientCompleteNamePreferred'));
			}
			var val = o['patientBirthDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('patientBirthDate')) {
				$('.inputMedicalEnrollment' + pk + 'PatientBirthDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'PatientBirthDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'PatientBirthDate'));
			}
			var val = o['clinicAddress'];
			if(vars.includes('clinicAddress')) {
				$('.inputMedicalEnrollment' + pk + 'ClinicAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'ClinicAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'ClinicAddress'));
			}
			var val = o['customerProfileId'];
			if(vars.includes('customerProfileId')) {
				$('.inputMedicalEnrollment' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'CustomerProfileId'));
			}
			var val = o['enrollmentSignature1'];
			if(vars.includes('enrollmentSignature1')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature1'));
			}
			var val = o['enrollmentSignature2'];
			if(vars.includes('enrollmentSignature2')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature2'));
			}
			var val = o['enrollmentSignature3'];
			if(vars.includes('enrollmentSignature3')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature3'));
			}
			var val = o['enrollmentSignature4'];
			if(vars.includes('enrollmentSignature4')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature4'));
			}
			var val = o['enrollmentSignature5'];
			if(vars.includes('enrollmentSignature5')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature5'));
			}
			var val = o['enrollmentSignature6'];
			if(vars.includes('enrollmentSignature6')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature6'));
			}
			var val = o['enrollmentSignature7'];
			if(vars.includes('enrollmentSignature7')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature7'));
			}
			var val = o['enrollmentSignature8'];
			if(vars.includes('enrollmentSignature8')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature8'));
			}
			var val = o['enrollmentSignature9'];
			if(vars.includes('enrollmentSignature9')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature9'));
			}
			var val = o['enrollmentSignature10'];
			if(vars.includes('enrollmentSignature10')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentSignature10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentSignature10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentSignature10'));
			}
			var val = o['enrollmentDate1'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate1')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate1'));
			}
			var val = o['enrollmentDate2'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate2')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate2'));
			}
			var val = o['enrollmentDate3'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate3')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate3'));
			}
			var val = o['enrollmentDate4'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate4')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate4'));
			}
			var val = o['enrollmentDate5'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate5')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate5'));
			}
			var val = o['enrollmentDate6'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate6')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate6'));
			}
			var val = o['enrollmentDate7'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate7')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate7'));
			}
			var val = o['enrollmentDate8'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate8')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate8'));
			}
			var val = o['enrollmentDate9'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate9')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate9'));
			}
			var val = o['enrollmentDate10'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate10')) {
				$('.inputMedicalEnrollment' + pk + 'EnrollmentDate10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalEnrollment' + pk + 'EnrollmentDate10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalEnrollment' + pk + 'EnrollmentDate10'));
			}
		});
	}
}
