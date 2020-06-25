
// POST //

async function postMedicalPatient($formValues, success, error) {
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

	var valuePatientFirstName = $formValues.find('.valuePatientFirstName').val();
	if(valuePatientFirstName != null && valuePatientFirstName !== '')
		vals['patientFirstName'] = valuePatientFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePatientFirstNamePreferred = $formValues.find('.valuePatientFirstNamePreferred').val();
	if(valuePatientFirstNamePreferred != null && valuePatientFirstNamePreferred !== '')
		vals['patientFirstNamePreferred'] = valuePatientFirstNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
		vals['patientBirthDate'] = valuePatientBirthDate;

	var valueEnrollmentKeys = [];
	$formValues.find('input.valueEnrollmentKeys:checked').each(function(index) {
		valueEnrollmentKeys.push($(this).val());
	});
	if(valueEnrollmentKeys.length > 0)
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postMedicalPatientVals(vals, success, error) {
	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportMedicalPatient($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportMedicalPatientVals(JSON.parse(json), success, error);
}

function putimportMedicalPatientVals(json, success, error) {
	$.ajax({
		url: '/api/patient/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeMedicalPatient($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeMedicalPatientVals(JSON.parse(json), success, error);
}

function putmergeMedicalPatientVals(json, success, error) {
	$.ajax({
		url: '/api/patient/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyMedicalPatient($formValues, pk, success, error) {
	var vals = {};

	var valuePatientFirstName = $formValues.find('.valuePatientFirstName').val();
	if(valuePatientFirstName != null && valuePatientFirstName !== '')
		vals['patientFirstName'] = valuePatientFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePatientFirstNamePreferred = $formValues.find('.valuePatientFirstNamePreferred').val();
	if(valuePatientFirstNamePreferred != null && valuePatientFirstNamePreferred !== '')
		vals['patientFirstNamePreferred'] = valuePatientFirstNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
		vals['patientBirthDate'] = valuePatientBirthDate;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = [valueEnrollmentKeys];

	putcopyMedicalPatientVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyMedicalPatientVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/patient/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchMedicalPatient($formFilters, $formValues, pk, success, error) {
	var filters = patchMedicalPatientFilters($formFilters);

	var vals = {};

	var valuePatientFirstName = $formValues.find('.valuePatientFirstName').val();
	if(valuePatientFirstName != null && valuePatientFirstName !== '')
	var removePatientFirstName = $formFilters.find('.removePatientFirstName').val() === 'true';
	var setPatientFirstName = removePatientFirstName ? null : $formValues.find('.setPatientFirstName').val();
	if(removePatientFirstName || setPatientFirstName != null && setPatientFirstName !== '')
		vals['setPatientFirstName'] = setPatientFirstName;
	var addPatientFirstName = $formValues.find('.addPatientFirstName').val();
	if(addPatientFirstName != null && addPatientFirstName !== '')
		vals['addPatientFirstName'] = addPatientFirstName;
	var removePatientFirstName = $formValues.find('.removePatientFirstName').val();
	if(removePatientFirstName != null && removePatientFirstName !== '')
		vals['removePatientFirstName'] = removePatientFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
	var removeFamilyName = $formFilters.find('.removeFamilyName').val() === 'true';
	var setFamilyName = removeFamilyName ? null : $formValues.find('.setFamilyName').val();
	if(removeFamilyName || setFamilyName != null && setFamilyName !== '')
		vals['setFamilyName'] = setFamilyName;
	var addFamilyName = $formValues.find('.addFamilyName').val();
	if(addFamilyName != null && addFamilyName !== '')
		vals['addFamilyName'] = addFamilyName;
	var removeFamilyName = $formValues.find('.removeFamilyName').val();
	if(removeFamilyName != null && removeFamilyName !== '')
		vals['removeFamilyName'] = removeFamilyName;

	var valuePatientFirstNamePreferred = $formValues.find('.valuePatientFirstNamePreferred').val();
	if(valuePatientFirstNamePreferred != null && valuePatientFirstNamePreferred !== '')
	var removePatientFirstNamePreferred = $formFilters.find('.removePatientFirstNamePreferred').val() === 'true';
	var setPatientFirstNamePreferred = removePatientFirstNamePreferred ? null : $formValues.find('.setPatientFirstNamePreferred').val();
	if(removePatientFirstNamePreferred || setPatientFirstNamePreferred != null && setPatientFirstNamePreferred !== '')
		vals['setPatientFirstNamePreferred'] = setPatientFirstNamePreferred;
	var addPatientFirstNamePreferred = $formValues.find('.addPatientFirstNamePreferred').val();
	if(addPatientFirstNamePreferred != null && addPatientFirstNamePreferred !== '')
		vals['addPatientFirstNamePreferred'] = addPatientFirstNamePreferred;
	var removePatientFirstNamePreferred = $formValues.find('.removePatientFirstNamePreferred').val();
	if(removePatientFirstNamePreferred != null && removePatientFirstNamePreferred !== '')
		vals['removePatientFirstNamePreferred'] = removePatientFirstNamePreferred;

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

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = valueEnrollmentKeys;

	patchMedicalPatientVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchMedicalPatientFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterClinicKeys = $formFilters.find('.valueClinicKeys').val();
		if(filterClinicKeys != null && filterClinicKeys !== '')
			filters.push({ name: 'fq', value: 'clinicKeys:' + filterClinicKeys });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientFormalName = $formFilters.find('.valuePatientFormalName').val();
		if(filterPatientFormalName != null && filterPatientFormalName !== '')
			filters.push({ name: 'fq', value: 'patientFormalName:' + filterPatientFormalName });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });
	}
	return filters;
}

function patchMedicalPatientVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchMedicalPatientVals(filters, vals, success, error);
}

function patchMedicalPatientVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getMedicalPatient(pk) {
	$.ajax({
		url: '/api/patient/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchMedicalPatient($formFilters, success, error) {
	var filters = searchMedicalPatientFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchMedicalPatientVals(filters, success, error);
}

function searchMedicalPatientFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterClinicKeys = $formFilters.find('.valueClinicKeys').val();
		if(filterClinicKeys != null && filterClinicKeys !== '')
			filters.push({ name: 'fq', value: 'clinicKeys:' + filterClinicKeys });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientFormalName = $formFilters.find('.valuePatientFormalName').val();
		if(filterPatientFormalName != null && filterPatientFormalName !== '')
			filters.push({ name: 'fq', value: 'patientFormalName:' + filterPatientFormalName });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });
	}
	return filters;
}

function searchMedicalPatientVals(filters, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMedicalPatientEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_patientKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_patientKey_" + o['pk'] + "'); patchMedicalPatientVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#MedicalPatientForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalEnrollmentVals(filters, success, error);
}

// AdminSearch //

async function adminsearchMedicalPatient($formFilters, success, error) {
	var filters = adminsearchMedicalPatientFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchMedicalPatientVals(filters, success, error);
}

function adminsearchMedicalPatientFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterClinicKeys = $formFilters.find('.valueClinicKeys').val();
		if(filterClinicKeys != null && filterClinicKeys !== '')
			filters.push({ name: 'fq', value: 'clinicKeys:' + filterClinicKeys });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientFormalName = $formFilters.find('.valuePatientFormalName').val();
		if(filterPatientFormalName != null && filterPatientFormalName !== '')
			filters.push({ name: 'fq', value: 'patientFormalName:' + filterPatientFormalName });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });
	}
	return filters;
}

function adminsearchMedicalPatientVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/patient?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMedicalPatientEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_patientKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_patientKey_" + o['pk'] + "'); patchMedicalPatientVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#MedicalPatientForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalEnrollmentVals(filters, success, error);
}

async function websocketMedicalPatient(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketMedicalPatient', function (error, message) {
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
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-hospital-user w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify patients');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketMedicalEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketMedicalEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});
	}
}
async function websocketMedicalPatientInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchMedicalPatientVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['patientFirstName'];
			if(vars.includes('patientFirstName')) {
				$('.inputMedicalPatient' + pk + 'PatientFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'PatientFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'PatientFirstName'));
			}
			var val = o['familyName'];
			if(vars.includes('familyName')) {
				$('.inputMedicalPatient' + pk + 'FamilyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'FamilyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'FamilyName'));
			}
			var val = o['patientFirstNamePreferred'];
			if(vars.includes('patientFirstNamePreferred')) {
				$('.inputMedicalPatient' + pk + 'PatientFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'PatientFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'PatientFirstNamePreferred'));
			}
			var val = o['patientBirthDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('patientBirthDate')) {
				$('.inputMedicalPatient' + pk + 'PatientBirthDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'PatientBirthDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'PatientBirthDate'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputMedicalPatient' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'EnrollmentKeys'));
			}
		});
	}
}
